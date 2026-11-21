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

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, readFileSync(join(here, 'entry.png')));
