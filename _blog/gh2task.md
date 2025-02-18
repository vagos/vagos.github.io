---
layout: post
title: "Add GitHub Issues to Taskwarrior"
description: "A script to turn GitHub issues into Taskwarrior tasks"
date: 2025-02-18
---

You can convert GitHub issues into [Taskwarrior](https://taskwarrior.org/)
tasks using [`gh`](https://cli.github.com/) and [`jq`](https://jqlang.org/).

The `gh` CLI allows you to list all issues in a repository as JSON. This can include
attributes like `title`, `url`, and `labels`. You can then use `jq` to
transform this output into a line based format, extract whatever attributes
you need, and finally add them as tasks with `task add`.

The `gh issue ls --json title,url` outputs something like this:

```json
[
  {
    "title": "An Issue",
    "url": "https://github.com/user/repo/issues/1"
  },
  {
    "title": "Another Issue",
    "url": "https://github.com/user/repo/issues/2"
    }
]
```

Then, `jq -c '.[]'` will flatten the array and output an issue per line:

```json
{"title":"An Issue",     "url":"https://github.com/user/repo/issues/1"}
{"title":"Another Issue","url":"https://github.com/user/repo/issues/2"}
```

The final script looks like this: 

```bash
while read -r issue; do
  title=$(jq -r '.title' <<< "$issue")
  url=$(jq -r '.url' <<< "$issue")
  task add "$title" url:"$url"
done < <(gh issue ls --json title,url | jq -c '.[]')
```

One can turn issue labels into tags by adding `labels` to the `gh issue ls --json`.
Here, I've added `url` as a [user-defined-attribute (UDA)](https://taskwarrior.org/docs/udas/).
I can then inspect a task with `task info <task-id>` to see the URL.

Example output (truncated):

```bash
$ task
ID Age   Description 
 1 1min  An Issue
 2 1min  Another Issue

$ task info 1
Name          Value
ID            1
Description   An Issue
Status        Pending
URL           https://github.com/user/repo/issues/1
```
