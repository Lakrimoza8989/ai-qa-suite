#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import * as path from "path";
import dotenv from "dotenv";
import { normalizeBug } from "../src/index.js";

dotenv.config();

const program = new Command();
program
  .name("ai-bug-normalizer")
  .description("Normalize raw bug text into Jira-style report")
  .requiredOption("-i, --input <file>", "raw bug file")
  .option("-o, --output <file>", "output file", "out/bug_normalized.md");

program.action(async (opts) => {
  const raw = readFileSync(opts.input, "utf-8");
  const md = await normalizeBug(raw);
  mkdirSync(path.dirname(opts.output), { recursive: true });
  writeFileSync(opts.output, md, "utf-8");
  console.log("[ok] Wrote:", opts.output);
});

program.parse();
