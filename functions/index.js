const { GoogleGenerativeAI } = require("@google/generative-ai");
const PORTFOLIO_AI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.chat = onRequest(
  {
    region: "us-central1",
    secrets: ["GEMINI_API_KEY"],
  },
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "POST");
      return res.status(204).send();
    }

    const history = req.body.history || [];
    const lastMsg = history[history.length - 1]?.text.toLowerCase() || "";

    // Auto language detect
    const isTL = [
      "po","opo","paano","ano","saan","ilan","magkano","pwede","kailangan",
      "tayong","hindi","oo","salamat"
    ].some(w => lastMsg.includes(w));

    const lang = isTL ? "tl" : "en";

    const basePrompt = isTL
      ? "Ikaw ay professional AI Assistant ni Jhed Sarmiento. Simple, magalang, diretso sumagot."
      : "You are Jhed Sarmiento's formal and professional AI Assistant. Short, respectful, and helpful."

    const rules = `
Topics allowed:
- Chrysler’s skills: HTML, CSS, JavaScript, React, Tailwind, PHP, Java, Flutter
- Portfolio projects: Portfolio 
- Education: BPSU, 1st Year BSIT
- Certifications: freeCodeCamp, Certiport, Cisco NetAcad
- Internship goals: Web/Mobile Dev

If unrelated → politely redirect (same language).
Always concise.
    `;

    const conversation = history
      .map(m => `${m.from === "user" ? "User" : "Assistant"}: ${m.text}`)
      .join("\n");

    const prompt = `${basePrompt}
${rules}

Conversation so far:
${conversation}
Assistant:`.trim();

    try {
      const model = PORTFOLIO_AI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const reply = result.response.text();

      return res.status(200).json({ reply });

    } catch (err) {
      console.error("Portfolio AI Error:", err);
      return res.status(500).json({ error: "AI failed" });
    }
  }
);
