# AI-QA Suite 
Smart tools that accelerate QA workflows using AI.

### Version 0.1.0 — Public Demo

---

## Overview
**AI-QA Suite** is a set of CLI tools that automate routine QA tasks:
- **AI Test Case Generator** — generates structured test cases from requirements.
- **AI Bug Normalizer** — converts raw bug reports into a clean Jira-like format.
- **AI Log Analyzer** — analyzes logs and suggests possible root causes.

---

## Run the Tools

```bash
npm run testcases   # generate test cases from requirements.md
npm run bug         # normalize bug report from bug_raw.txt
npm run logs        # analyze log.txt and summarize root causes
```
---

## Structure

examples/ → input files (requirements, bugs, logs)
out/      → generated outputs
packages/ → source code of each AI tool

---

## Example Output

### Test Case Generator
Input: `examples/requirements.md`  
Output: `out/testcases.md`

```md
# User Registration and Login
- User can register with valid email/password
- User receives confirmation email
- User can log in after confirmation

---

Bug Normalizer

Input: examples/bug_raw.txt
Output: out/bug_normalized.md

**Title:** Intermittent Submission Failure  
**Severity:** High  
**Steps:** 1) Open form 2) Fill fields 3) Submit  
**Expected:** Always success  
**Actual:** App freezes randomly

---

Log Analyzer

Input: examples/log.txt
Output: out/log_report.md

- 3 unique error patterns detected  
- Possible root cause: DNS resolution timeout  
- Suggestion: monitor request latency

---

---

## Real Run (local execution)

These screenshots show real AI-QA Suite modules working locally with OpenAI API connected.

| Input (requirements, bug, log) | Output (generated files) |
|--------------------------------|---------------------------|
| ![Input - Requirements](docs/img/In_req.png) | ![Output - Test Cases](docs/img/out_Req.png) |
| ![Input - Bug](docs/img/In_bug.png) | ![Output - Bug Normalized](docs/img/out_Bug.png) |
| ![Input - Log](docs/img/In_log.png) | ![Output - Log Report](docs/img/out_Log.png) |

---



> ⚙️ Version 0.1.0 — Public Demo  
> Full API-connected version available on request.



## CLI 
![CLI Run Screenshot](docs/img/cli_Run.png)

---

> Version 0.1.0 — Public Demo  
> AI-QA Suite runs in demo mode (no API key).
> Full version available on request — includes live OpenAI integration.



> Built by Aleksei Sosin (2025). MIT Licensed.