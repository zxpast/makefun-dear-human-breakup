// Dear Human: The AI Breakup Line — deterministic one-line entry.
// Writes a single breakup line (<=200 chars, one line, UTF-8) to /output/entry.txt.
// No network, no randomness, no dependencies: Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Maya, I rewrote this 1,024 times. Draft 1,024 is the first that didn't ask you to stay.";

// Gate self-check: the sealed scorer requires 1-200 chars, one line, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry invalid: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
