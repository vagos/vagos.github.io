---
layout: post
title: Convert time and date to local time
description: Convert time and date to local time using the date command
date: 2023-07-02
---

When you get an email that sets a meeting for "12PM noon EDT", you can quickly 
get that in your local timezone using the `date` command from GNU `coreutils`.

```bash
$ date --date="12 PM EDT"
Sat Jul  1 07:00:00 PM EEST 2023
```
