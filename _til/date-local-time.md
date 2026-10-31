---
title: Converting a meeting time to your local timezone
date: 2023-07-02
tags: shell coreutils
---

When an email sets a meeting for "12PM noon EDT", GNU `date` will convert it to your local timezone:

```bash
$ date --date="12 PM EDT"
Sat Jul  1 07:00:00 PM EEST 2023
```
