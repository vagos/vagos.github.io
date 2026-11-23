---
title: Writing weekly reports from Taskwarrior with an LLM
date: 2025-03-29
tags: llm taskwarrior jq shell
---

This pipeline exports last week's completed tasks as JSON, uses [`jq`](https://jqlang.github.io/jq) to pull out each `.description`, and asks [`llm`](https://github.com/simonw/llm) to write a report:

```bash
task status:completed end.after:today-7d export |
jq '.[] | .description' |
llm -s 'Generate a report based on these completed tasks.'
```

