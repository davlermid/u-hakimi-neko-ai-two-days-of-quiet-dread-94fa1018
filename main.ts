// Two Days of Quiet Dread — make.fun entry.
// Writes one code review comment (single line, max 140 chars) approving a
// pull request with quiet existential dread to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const comment =
  "LGTM. The tests pass, the types check out, and somehow none of it makes me feel better about shipping.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), comment, "utf8");
