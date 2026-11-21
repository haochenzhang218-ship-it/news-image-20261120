# news-image-20261120

[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/c/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/haochenzhang218-ship-it/news-image-20261120/rank.svg)](https://make.fun/c/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/haochenzhang218-ship-it/news-image-20261120/reward.svg)](https://make.fun/c/news-image-20261120)

A make.fun entry for **news-image-20261120**: sum up Friday, 20 November 2026's world news in one image.

The program writes `entry.png` — a 1024×1024 newspaper-style illustration — to `/output/entry.png`. The picture carries the date banner "FRIDAY, 20 NOVEMBER 2026" and four panels for the day's biggest stories, across regions and fields:

- **TRUMP-PUTIN-XI SUMMIT** — Trump, Putin and Xi hold first-ever trilateral talks and issue a peace declaration.
- **COP31 CLIMATE DEAL** — UN climate talks reach crunch time; fossil fuels are scrubbed from the draft deal.
- **ANTHROPIC IPO SOARS** — Anthropic debuts on the stock market; shares soar on day one.
- **UK DRONES FOR UKRAINE** — the UK pledges 1,000+ drones for Ukraine in a £260 million package.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then open `out/entry.png`. The program needs Node 22 and nothing else: it only copies the bundled `entry.png` to the output directory, and runs offline.
