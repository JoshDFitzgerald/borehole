# Borehole

A trivia drilling game. Each prompt has a hidden list of answers ranked from most to least common. You have 25 seconds and as many guesses as you like. Your first guess that's on the list sends the drill down to the line that answer belongs to: Gravel, Coal, Copper, Gold, or the single rarest answer, Diamond. Wrong guesses just say try again. Near misses, and answers said a different way ("Henry the Eighth" for Henry VIII), get a "Did you mean…?". Every answer drills further down the same hole.

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

`validate.js` reports prompt counts, skipped lists (fewer than 6 answers), duplicate prompts and answer aliases that collide. To see how guesses are judged, pass `-t` with one or more `"prompt regex::guess"` pairs, e.g. `node source/validate.js -t "monarch of England::King Henry 8th"` prints HIT, ASK (did you mean), VAGUE or MISS.
