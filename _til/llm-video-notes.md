---
title: Taking notes on talk videos with yt-dlp and llm
date: 2025-03-29
tags: llm shell zk
---

`yt-dlp` can download just a video's subtitles, which you can pipe through [`llm`](https://github.com/simonw/llm) to get notes, and then straight into a new [`zk`](https://github.com/zk-org/zk) note to review and expand later:

```bash
yt-dlp --no-download --write-subs --output "$OUT" "$URL"
cat "$OUT" | llm -s "Create notes" | zk new -i
```

