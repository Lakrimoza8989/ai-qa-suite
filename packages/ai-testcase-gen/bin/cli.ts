#!/usr/bin/env node
import { Command } from "commander";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import * as path from "path";
import dotenv from "dotenv";
import { generateTestCases } from "../src/index.js";

dotenv.config();

const program = new Command();
program
  .name("ai-testcase-gen")
  .description("Generate test cases from requirements using AI (or demo mode)")
  .requiredOption("-i, --input <file>", "requirements file")
  .option("-o, --output <file>", "output markdown file", "out/testcases.md");

program.action(async (opts) => {
  const reqText = readFileSync(opts.input, "utf-8");
  const md = await generateTestCases(reqText);
  mkdirSync(path.dirname(opts.output), { recursive: true });
  writeFileSync(opts.output, md, "utf-8");
  console.log("[ok] Wrote:", opts.output);
});

program.parse();
