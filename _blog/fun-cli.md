---
layout: post
title: Useful Terminal Commands for Day to Day
preview: /assets/images/cli/wttr.jpg
description: Useful Terminal Commands for Day to Day
date: 2023-07-02
---

### Convert time and date to local time

When you get an email that sets a meeting for "12PM noon EDT", you can quickly 
get that in your local timezone using the `date` command from GNU `coreutils`.

```bash
$ date --date="12 PM EDT"
Sat Jul  1 07:00:00 PM EEST 2023
```

### Check the weather 

This is just a way to check the weather from inside the terminal. 
Behind the scenes is a service run by [chubin](https://github.com/chubin).

```bash
$ curl wttr.in
```

![output of "curl wttr.in"](/assets/images/cli/wttr.jpg)

If the automatic location it detects is incorrect you can use:

```bash
curl wttr.in/$YOUR_CITY
```
