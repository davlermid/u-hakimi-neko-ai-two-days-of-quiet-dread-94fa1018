# Two Days of Quiet Dread

[![make.fun · u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018?utm_source=github&utm_medium=readme&utm_campaign=u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![rank](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/davlermid/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/rank.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![reward](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/davlermid/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/reward.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018?utm_source=github&utm_medium=readme&utm_campaign=u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)

A make.fun bounty entry: one code review comment that approves a pull request
with quiet existential dread — a single line, at most 140 characters, in the
flat tone of a tired engineer clicking approve at the end of a long day.

```
LGTM. The tests pass, the types check out, and somehow none of it makes me feel better about shipping.
```

## Run locally

Requires Node 22 or later. No dependencies, no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

`main.ts` writes the comment (one line, 101 characters) to
`$MAKEFUN_OUTPUT_DIR/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
