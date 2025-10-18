import OpenAI from "openai";

export async function generateTestCases(requirements: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return `# Test Suite

## Positive
- TC-001: Register with valid email/password
  - Steps: Open Register, fill valid email & strong password, submit
  - Expected: Account created, confirmation email sent

## Negative
- TC-002: Duplicate email
  - Steps: Use an already-registered email
  - Expected: Error: email already in use

## Boundary
- TC-003: Password length = 8
  - Expected: Accepted
- TC-004: Password length = 7
  - Expected: Rejected`;
  }

  const client = new OpenAI({ apiKey });
  const sys = `You are a pragmatic senior QA engineer. Output valid GitHub-flavored Markdown only.`;
  const prompt = `REQUIREMENTS:\n${requirements}\n\nFollow the style from prompts.`;

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: sys },
      { role: "user", content: prompt }
    ],
    temperature: 0.2
  });

  return res.choices[0]?.message?.content || "";
}
