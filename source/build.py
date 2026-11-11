#!/usr/bin/env python3
"""Build the self-contained site: python3 source/build.py  ->  ../index.html (repo root)."""
import glob, os
here = os.path.dirname(os.path.abspath(__file__))
src = os.path.join(here, "src")
read = lambda p: open(os.path.join(src, p), encoding="utf-8").read()
data = "".join("\n/* ---- %s ---- */\n" % os.path.basename(p) + open(p, encoding="utf-8").read()
               for p in sorted(glob.glob(os.path.join(src, "data", "*.js"))))
js = "\n".join([read("core.js"), data, read("audio.js"), read("world.js"), read("mole.js"), read("game.js")])
icon = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23271f4a'/%3E"
        "%3Crect x='29' y='6' width='6' height='26' fill='%23b9bec6'/%3E%3Cpath d='M18 30h28l-14 28z' fill='%23f5b941'/%3E%3C/svg%3E")
page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#120d0b">
<title>Borehole</title>
<meta name="description" content="A trivia drilling game: rarer answers drill deeper.">
<meta property="og:title" content="Borehole">
<meta property="og:description" content="A trivia drilling game: rarer answers drill deeper. 1,000+ prompts, one continuous hole, and a mole named Digby.">
<link rel="icon" href="{icon}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=IBM+Plex+Mono:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap">
<style>
body{{margin:0}}[hidden]{{display:none!important}}img{{max-width:100%}}
{read("style.css")}
</style>
</head>
<body>
{read("body.html")}
<script>
{js}
</script>
</body>
</html>
"""
out = os.path.join(here, "..", "index.html")
open(out, "w", encoding="utf-8").write(page)
open(os.path.join(here, "bank.js"), "w", encoding="utf-8").write(read("core.js").split("/* ---------- selection")[0] + data)
print("wrote", os.path.abspath(out), len(page.encode()) // 1024, "KB")
