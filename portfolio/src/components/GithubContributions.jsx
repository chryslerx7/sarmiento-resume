import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./GithubContributions.css";

const USERNAME = "chryslerx7";
const PROFILE_URL = "https://github.com/chryslerx7";
const STORAGE_PREFIX = "gh-cal:";
const TTL_CURRENT_YEAR_MS = 60 * 60 * 1000; // 1h
const TTL_PAST_YEAR_MS = 24 * 60 * 60 * 1000; // 24h
const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function readCache(year) {
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + year);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.payload || !parsed.savedAt) return null;
    const currentYear = new Date().getFullYear();
    const ttl = year === currentYear ? TTL_CURRENT_YEAR_MS : TTL_PAST_YEAR_MS;
    if (Date.now() - parsed.savedAt > ttl) return null;
    return parsed.payload;
  } catch {
    return null;
  }
}

function writeCache(year, payload) {
  try {
    window.localStorage.setItem(
      STORAGE_PREFIX + year,
      JSON.stringify({ payload, savedAt: Date.now() })
    );
  } catch {
    // Storage may be unavailable (private mode, quota); the UI works without it.
  }
}

function formatDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function friendlyError(status) {
  if (status === 400) return "That year is not available.";
  if (status === 500) return "The contribution service is not configured right now.";
  if (status === 502) return "GitHub is unreachable right now. Try again in a bit.";
  return "Could not load contribution activity.";
}

function statusForPayload(payload) {
  return payload.totalContributions === 0 || payload.weeks.length === 0
    ? "empty"
    : "loaded";
}

export default function GithubContributions() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [years, setYears] = useState(() => {
    const cached = readCache(currentYear);
    return Array.isArray(cached?.years) && cached.years.length > 0
      ? cached.years
      : [currentYear];
  });
  const [data, setData] = useState(() => readCache(currentYear));
  const [status, setStatus] = useState(() => {
    const cached = readCache(currentYear);
    return cached ? statusForPayload(cached) : "loading";
  }); // loading | loaded | empty | error
  const [errorMessage, setErrorMessage] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  function handleYearChange(year) {
    setSelectedYear(year);
    // Cache is read in the event handler (not in an effect) so selecting a
    // previously loaded year renders instantly without a network request.
    const cached = readCache(year);
    if (cached) {
      setData(cached);
      if (Array.isArray(cached.years) && cached.years.length > 0) {
        setYears(cached.years);
      }
      setStatus(statusForPayload(cached));
      setErrorMessage("");
    } else {
      setData(null);
      setStatus("loading");
      setErrorMessage("");
    }
  }

  function handleRetry() {
    setStatus("loading");
    setErrorMessage("");
    setRetryCount((n) => n + 1);
  }

  useEffect(() => {
    // Skip the network request when fresh cache for this year is already
    // rendered (set via the lazy initializer or handleYearChange above).
    // A retry (retryCount > 0) always bypasses the cache.
    // Note: this effect never calls setState synchronously — state updates
    // happen only in the async fetch callbacks below.
    if (retryCount === 0 && readCache(selectedYear)) {
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    fetch(`/api/github?year=${selectedYear}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(friendlyError(res.status));
        }
        return res.json();
      })
      .then((payload) => {
        if (cancelled) return;
        if (!payload || !Array.isArray(payload.weeks)) {
          throw new Error("Could not load contribution activity.");
        }
        writeCache(selectedYear, payload);
        setData(payload);
        if (Array.isArray(payload.years) && payload.years.length > 0) {
          setYears(payload.years);
        }
        setStatus(statusForPayload(payload));
      })
      .catch((err) => {
        if (cancelled || err.name === "AbortError") return;
        setData(null);
        setErrorMessage(err.message || "Could not load contribution activity.");
        setStatus("error");
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [selectedYear, retryCount]);

  const total =
    data && typeof data.totalContributions === "number"
      ? data.totalContributions
      : 0;
  const flatDays = data ? data.weeks.flat() : [];

  return (
    <section
      className="card connect-container gh-contrib"
      aria-labelledby="gh-contrib-title"
    >
      <div className="gh-contrib-head">
        <h2 className="section-title" id="gh-contrib-title">
          <FaGithub className="section-icon" aria-hidden="true" />
          GitHub Contributions
        </h2>
        {years.length > 1 ? (
          <label className="gh-year-label">
            <span className="gh-year-text">Year</span>
            <select
              className="gh-year"
              aria-label="Select contribution year"
              value={selectedYear}
              onChange={(e) => handleYearChange(Number(e.target.value))}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <span className="gh-year-static" aria-label={`Year ${selectedYear}`}>
            {selectedYear}
          </span>
        )}
      </div>

      <p className="gh-contrib-sub">
        <span aria-live="polite">
          {status === "loading"
            ? "Loading contribution activity…"
            : `${total.toLocaleString()} contributions in ${selectedYear}`}
        </span>
        <a
          className="gh-profile-link"
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{USERNAME} on GitHub
        </a>
      </p>

      {status === "loading" && (
        <div
          className="gh-contrib-scroll"
          role="status"
          aria-label="Loading contribution data"
          aria-busy="true"
        >
          <div className="gh-cal" aria-hidden="true">
            <div className="gh-months">
              <span className="gh-month-skel" />
              <span className="gh-month-skel" />
              <span className="gh-month-skel" />
            </div>
            <div className="gh-body">
              <div className="gh-grid">
                {Array.from({ length: 26 * 7 }).map((_, i) => (
                  <span key={i} className="gh-day is-skel" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="gh-state" role="alert">
          <p className="gh-state-text">{errorMessage}</p>
          <button
            type="button"
            className="btn btn-white gh-retry"
            onClick={handleRetry}
          >
            Retry
          </button>
        </div>
      )}

      {status === "empty" && (
        <div className="gh-state">
          <p className="gh-state-text">
            No contributions recorded in {selectedYear} yet.
          </p>
        </div>
      )}

      {status === "loaded" && data && (
        <div className="gh-contrib-scroll">
          <div
            className="gh-cal"
            role="img"
            aria-label={`${total.toLocaleString()} contributions in ${selectedYear} for ${USERNAME}`}
          >
            <div className="gh-months" aria-hidden="true">
              {data.months.map((month) => (
                <span
                  key={`${month.name}-${month.weekIndex}`}
                  className="gh-month"
                  style={{ "--gh-week": month.weekIndex }}
                >
                  {month.name}
                </span>
              ))}
            </div>
            <div className="gh-body">
              <div className="gh-weekdays" aria-hidden="true">
                {WEEKDAY_LABELS.map((label, i) => (
                  <span key={label} className="gh-weekday">
                    {[1, 3, 5].includes(i) ? label : ""}
                  </span>
                ))}
              </div>
              <div className="gh-grid" role="grid" aria-label={`Contributions in ${selectedYear}`}>
                {flatDays.map((day, i) =>
                  day.date === null ? (
                    <span
                      key={`pad-${i}`}
                      className="gh-day is-pad"
                      aria-hidden="true"
                    />
                  ) : (
                    <button
                      key={day.date}
                      type="button"
                      className="gh-day"
                      data-level={day.level}
                      data-tip={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                      aria-label={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {(status === "loaded" || status === "loading") && (
        <div className="gh-contrib-foot" aria-hidden={status !== "loaded"}>
          <span className="gh-legend-label">Less</span>
          <span className="gh-legend-cells">
            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className="gh-day is-legend"
                data-level={level}
              />
            ))}
          </span>
          <span className="gh-legend-label">More</span>
        </div>
      )}
    </section>
  );
}
