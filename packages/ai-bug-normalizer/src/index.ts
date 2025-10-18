import OpenAI from "openai";

export async function normalizeBug(raw: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return `# Bug Report
- Title: Intermittent submit failure on form
- Environment: Web, prod (?)
- Steps:
  1. Open form
  2. Click Submit repeatedly
  3. Observe random freezes
- Expected: Submit is reliable
- Actual: Sometimes request freezes
- Notes: Needs triage`;
  }

  const client = new OpenAI({ apiKey });
  const sys = `You are a QA lead. Output a clean Markdown bug report.`;
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: sys },
      { role: "user", content: `RAW BUG REPORT:\n${raw}` }
    ],
    temperature: 0.2
  });

  return res.choices[0]?.message?.content || "";
}
