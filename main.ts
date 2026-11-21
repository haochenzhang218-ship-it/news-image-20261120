// news-image-20261120: a program that writes one image summing up
// Friday, 20 November 2026's world news to /output/entry.png.
//
// The image lives next to this file as entry.png (a 1024x1024 PNG of at
// most 1 MiB). The program does nothing but place that exact file at the
// path the grader reads. It runs offline with the Node standard library
// only, so there is nothing to install and nothing to fetch.
//
// Local run (MAKEFUN_OUTPUT_DIR stands in for /output outside the
// grader's container):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');
const source = join(here, 'entry.png');

// Validate the source image before copying: it must exist, be a real
// PNG (first 8 bytes are the PNG magic), and be at most 1 MiB. Fail
// with a clear one-line message instead of a stack trace.
if (!existsSync(source)) {
  console.error('error: entry.png is missing next to main.ts');
  process.exit(1);
}
const png = readFileSync(source);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (png.length < 8 || !png.subarray(0, 8).equals(PNG_MAGIC)) {
  console.error('error: entry.png is not a valid PNG file');
  process.exit(1);
}
if (png.length > 1024 * 1024) {
  console.error(`error: entry.png is ${png.length} bytes, over the 1 MiB limit`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, png);

// Verify the written file byte-for-byte against the source before
// reporting success.
const written = readFileSync(target);
if (!written.equals(png)) {
  console.error('error: written entry.png does not match the source');
  process.exit(1);
}
console.log(`wrote ${target} (${written.length} bytes)`);
