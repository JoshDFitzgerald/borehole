# Borehole

A trivia drilling game. Each prompt has a hidden list of answers ranked from most to least common. Give one answer in 25 seconds and your drill bores down to the line that answer belongs to: Gravel, Coal, Copper, Gold, or the single rarest answer, Diamond. Every answer drills further down the same hole.

- 1,003 prompts across geography, science, food, sports, film and TV, music, history, words and more
- No repeats until you've played through most of the bank
- Seven prompts per hole, then an endless mode until you burn through three drill bits
- Digby the mole digs along with you

It's a single self-contained `index.html` with no build step, served by GitHub Pages.

## Editing

The game lives in `source/src` (engine, styles, and the question bank in `source/src/data`). Rebuild the page after changes:

```
python3 source/build.py
node source/validate.js
```

`validate.js` reports prompt counts, skipped lists (fewer than 6 answers), duplicate prompts and answer aliases that collide.
