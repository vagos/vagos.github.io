---
layout: post
title: "Send yourself command output via email"
description: "A one-liner to email command output to yourself using mutt."
date: 2025-12-27
tags: shell mail mutt
---

You can email yourself (or anyone else) the output of any command with [`mutt`](http://www.mutt.org/) using the following one-liner:

```bash
cmd | mutt -s "$subject" "$email"
```

Noting something across devices (almost all of them are connected to my email).
```bash
echo "$x $y $z" | mutt -s "Reminder" "$email"
```

Sending a morning reminder of active [tasks](https://taskwarrior.org/) (running as a `cron` job).
```bash
task active | mutt -s "Tasks" "$email"
```
