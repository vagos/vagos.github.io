---
title: Turning GitHub issues into Taskwarrior tasks
date: 2025-02-18
tags: taskwarrior github jq shell
---

[`gh`](https://cli.github.com/) can list a repository's issues as JSON, and [`jq`](https://jqlang.org/) can flatten that into one issue per line, which makes it easy to feed into [Taskwarrior](https://taskwarrior.org/).

`gh issue ls --json title,url` outputs an array:

```json
[
  {"title": "An Issue", "url": "https://github.com/user/repo/issues/1"},
  {"title": "Another Issue", "url": "https://github.com/user/repo/issues/2"}
]
```

`jq -c '.[]'` turns it into one compact object per line:

```json
{"title":"An Issue","url":"https://github.com/user/repo/issues/1"}
{"title":"Another Issue","url":"https://github.com/user/repo/issues/2"}
```

Then loop over the lines and `task add` each one:

```bash
while read -r issue; do
  title=$(jq -r '.title' <<< "$issue")
  url=$(jq -r '.url' <<< "$issue")
  task add "$title" url:"$url"
done < <(gh issue ls --json title,url | jq -c '.[]')
```

`url` here is a [user-defined attribute (UDA)](https://taskwarrior.org/docs/udas/), so `task info <id>` shows the link:

```bash
$ task info 1
Name          Value
ID            1
Description   An Issue
Status        Pending
URL           https://github.com/user/repo/issues/1
```

Adding `labels` to the `--json` fields lets you turn issue labels into task tags too.
