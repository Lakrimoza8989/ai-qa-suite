#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import * as path from "path";
import dotenv from "dotenv";
import { analyzeLogs } from "../src/index.js";

dotenv.config();

const program = new Command();
program
  .name("ai-log-analyzer")
  .description("Summarize logs and suggest probable root causes")
  .requiredOption("-i, --input <file>", "log file")
  .option("-o, --output <file>", "output file", "out/log_report.md");

program.action(async (opts) => {
  const raw = readFileSync(opts.input, "utf-8");
  const md = await analyzeLogs(raw);
  mkdirSync(path.dirname(opts.output), { recursive: true });
  writeFileSync(opts.output, md, "utf-8");
  console.log("[ok] Wrote:", opts.output);
});

program.parse();
