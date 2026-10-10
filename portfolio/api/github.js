/* global process */
// Secure server-side GitHub contribution-calendar endpoint.
//
// Vercel Serverless Function (project root is `portfolio/`, so this file
// deploys as GET /api/github). Uses GitHub GraphQL with a server-only token.
//
// Required Vercel env var (Dashboard -> Project -> Settings -> Environment
// Variables, never committed, never prefixed with VITE_):
//   GITHUB_TOKEN  (fine-grained PAT, public read-only is enough)
//
// Request:  GET /api/github?year=2026   (`year` optional, defaults to current year)
// Response: { login, year, years, totalContributions, weeks, months, cached, updatedAt }
//   weeks:  array of weeks; each week is an array of 7 cells ordered Sun..Sat.
//           A cell is { date, count, level, weekday } with level 0..4, or a
//           placeholder { date: null, count: null, level: -1, weekday }.
//   months: [{ name, weekIndex }] label anchors for the calendar header row.

const LOGIN = "chryslerx7";
const GRAPHQL_URL = "https://api.github.com/graphql";
const MIN_YEAR = 2008; // GitHub founded 2008; contribution data cannot predate it.
const TTL_CURRENT_YEAR_MS = 60 * 60 * 1000; // 1h  (current year still changes)
const TTL_PAST_YEAR_MS = 6 * 60 * 60 * 1000; // 6h  (past years are immutable)
const UPSTREAM_TIMEOUT_MS = 12000;

// Bounded in-memory cache per serverless instance (edge cache headers below
// provide the cross-instance layer).
const cache = new Map(); // year -> { payload, expiresAt }

const QUERY = `
  query($login: String!, $from: DateTime, $to: DateTime) {
    user(login: $login) {
      years: contributionsCollection {
        contributionYears
      }
      calendar: contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              weekday
            }
          }
        }
      }
    }
  }
`;

const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Fixed grayscale intensity buckets (GitHub's green `color` is intentionally
// ignored so the UI stays monochrome in both themes).
function levelForCount(count) {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function monthIndexUTC(isoDate) {
  return Number.parseInt(isoDate.slice(5, 7), 10) - 1;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const now = new Date();
  const currentYear = now.getUTCFullYear();
  const rawYear = req.query ? req.query.year : undefined;
  const year = rawYear === undefined || rawYear === "" ? currentYear : Number(rawYear);
  if (!Number.isInteger(year) || year < MIN_YEAR || year > currentYear) {
    return res.status(400).json({ error: "Invalid year" });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    // Generic message on purpose: never hint at which secret is missing.
    console.error("github api: integration unavailable");
    return res.status(500).json({ error: "GitHub integration unavailable" });
  }

  const hit = cache.get(year);
  if (hit && hit.expiresAt > Date.now()) {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );
    return res.status(200).json({ ...hit.payload, cached: true });
  }

  const from = `${year}-01-01T00:00:00Z`;
  const to = year === currentYear ? now.toISOString() : `${year}-12-31T23:59:59Z`;

  let upstream;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);
    try {
      upstream = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
          // The token lives only here, server-side. It is never logged or
          // returned to the client.
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "portfolio-contrib-calendar",
        },
        body: JSON.stringify({ query: QUERY, variables: { login: LOGIN, from, to } }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
  } catch {
    console.error("github api: upstream network error");
    return res.status(502).json({ error: "GitHub upstream error" });
  }

  let body = null;
  try {
    body = await upstream.json();
  } catch {
    body = null;
  }

  const user = body && body.data ? body.data.user : null;
  const calendar =
    user && user.calendar ? user.calendar.contributionCalendar : null;
  if (!upstream.ok || (body && body.errors) || !user || !calendar) {
    const errText = JSON.stringify(body && body.errors ? body.errors : body);
    const rateLimited = /rate ?limit/i.test(errText || "");
    console.error(
      `github api: upstream responded ${upstream.status}${rateLimited ? " (rate limited)" : ""}`
    );
    const resOut = res.status(502);
    if (rateLimited) resOut.setHeader("Retry-After", "60");
    return resOut.json({ error: "GitHub upstream error" });
  }

  // Normalize: map counts to monochrome levels and pad edge weeks to full
  // Sun..Sat columns so the client can render a plain column-flow grid.
  const weeks = (calendar.weeks || []).map((week) =>
    (week.contributionDays || []).map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: levelForCount(day.contributionCount),
      weekday: day.weekday,
    }))
  );
  if (weeks.length > 0) {
    const first = weeks[0];
    const padStart = first.length > 0 ? first[0].weekday : 0;
    for (let w = 0; w < padStart; w += 1) {
      first.unshift({ date: null, count: null, level: -1, weekday: w });
    }
    const last = weeks[weeks.length - 1];
    for (let w = last.length; w < 7; w += 1) {
      last.push({ date: null, count: null, level: -1, weekday: w });
    }
  }

  // Month label anchors: first week index at which a new month appears.
  const months = [];
  let seenMonth = -1;
  weeks.forEach((week, weekIndex) => {
    const dated = week.find((cell) => cell.date !== null);
    if (!dated) return;
    const month = monthIndexUTC(dated.date);
    if (month !== seenMonth) {
      seenMonth = month;
      months.push({ name: MONTH_SHORT[month], weekIndex });
    }
  });

  const years =
    user.years && Array.isArray(user.years.contributionYears)
      ? [...user.years.contributionYears].sort((a, b) => b - a)
      : [year];

  const payload = {
    login: LOGIN,
    year,
    years,
    totalContributions: calendar.totalContributions || 0,
    weeks,
    months,
    cached: false,
    updatedAt: new Date().toISOString(),
  };

  cache.set(year, {
    payload,
    expiresAt:
      Date.now() + (year === currentYear ? TTL_CURRENT_YEAR_MS : TTL_PAST_YEAR_MS),
  });
  // Keep the cache bounded (one entry per year requested).
  if (cache.size > 12) {
    const oldest = cache.keys().next().value;
    cache.delete(oldest);
  }

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  return res.status(200).json(payload);
}
