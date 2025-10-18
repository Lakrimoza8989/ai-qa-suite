import OpenAI from "openai";

function naiveGroups(text: string): string {
  const lines = text.split(/\r?\n/);
  const buckets = { null: [] as string[], timeout: [] as string[], auth: [] as string[], other: [] as string[] };
  for (const l of lines) {
    if (/Cannot read properties of null/i.test(l)) buckets.null.push(l);
    else if (/timeout/i.test(l)) buckets.timeout.push(l);
    else if (/csrf|auth|unauthor/i.test(l)) buckets.auth.push(l);
    else if (l.trim()) buckets.other.push(l);
  }
  const toMd = (k: string, arr: string[]) => arr.length ? `### ${k}\n` + arr.map(s=>`- ${s}`).join("\n") + "\n" : "";
  return `# Log Summary (demo)\n${toMd('Null', buckets.null)}${toMd('Timeout', buckets.timeout)}${toMd('Auth', buckets.auth)}${toMd('Other', buckets.other)}`;
}

export async function analyzeLogs(raw: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return naiveGroups(raw);

  const client = new OpenAI({ apiKey });
  const sys = `You are a pragmatic SRE/QA hybrid. Group similar errors and suggest probable root causes. Output Markdown.`;
  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: sys },
      { role: "user", content: raw }
    ],
    temperature: 0.2
  });
  return res.choices[0]?.message?.content || naiveGroups(raw);
}
