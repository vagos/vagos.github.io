---
title: Generating playlists by interpolating audio embeddings
date: 2025-03-29
tags: llm shell jq music
---

A model that understands audio can embed a music collection into a space where similar songs sit close together. Interpolating between two songs in that space gives you a path between them, which is a playlist that transitions smoothly.

![Interpolating between two songs](/assets/img/llm-unix/interpolate.jpg){: .wrap-right width="150px"}
With [`llm`](https://github.com/simonw/llm) and the [`llm-clap`](https://github.com/vagos/llm-clap) plugin, embed your collection (`$MC`) with the CLAP model. This stores every song and its embedding in a local `embeddings.db`:

```bash
llm embed-multi -m clap songs --files $MC '*'
```

The [`llm-interpolate`](https://github.com/vagos/llm-interpolate) plugin then returns the points between a start and an end song. This makes a 5-song `.m3u` playlist from `PacifyHer.wav` to `redrum.wav`:

```bash
llm interpolate songs "PacifyHer" "redrum" -n 5 | jq .[] > playlist.m3u
```

