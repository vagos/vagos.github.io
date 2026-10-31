---
title: Emailing yourself command output with mutt
date: 2025-12-27
tags: shell mail mutt
---

[`mutt`](http://www.mutt.org/) reads the message body from stdin, so you can email yourself (or anyone else) the output of any command:

```bash
cmd | mutt -s "$subject" "$email"
```

Sending a quick note:

```bash
echo "$x $y $z" | mutt -s "Reminder" "$email"
```

Sending a morning reminder of active [tasks](https://taskwarrior.org/), run as a `cron` job:

```bash
task active | mutt -s "Tasks" "$email"
```
