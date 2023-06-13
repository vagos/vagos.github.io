---
layout: post
title: making an MCI command parser for scummvm
date: 2023-04-11
---

A few weeks ago I did some work with the people over at the [ScummVM](https://www.scummvm.org/) codebase, 
a large engine reimplementation project.
Their community[^1] is really welcoming and great for anyone (even beginners) interested in
working in open source.

I wrote a parser for the MCI protocol, an old Windows media API.
I was given quite a bit of documentation regarding MCI, and the fact that this protocol 
even existed was very interesting.

MCI stands for "Media Control Interface" and is a high-level API for
controlling media devices. It is now mostly unused in favor of more modern
protocols like DirectShow (part of DirectX) and Universal Windows Platform. The
idea is that device drivers would implement API and would thus be controllable through
high-level commands like `play file.wav from 0 to 100`.

The general command structure is:

```bash
command <device> [parameters ...]
```

It's actually quite a nice and simple way of controlling your devices. 

IBM filed a [patent](https://patents.google.com/patent/US6397263) in 2002 for
the mechanism which parses MCI commands. The entire document was quite
intriguing, since they are explaining quite a simple program that takes a
command string and turns it into a data structure[^2] (basically just a parser).
They even describe the tokenization procedure and that
tokens will be saved in a linked list (as opposed to an array), probably to
fascilitate for low memory devices. 
I wonder if someone implementing the MCI protocol would have to pay IBM for it. 

![MCI Patent (parsing part)](/assets/images/mci/patent.png)

An interesting part of their implementation is how there is no
specific command list/specification. Rather, a command table 
will have to be provided which is parsed and each command's arguments
are determined from it.
This way, someone can add new commands to the protocol by just modifying this table.
In our code, we keep the table as a structure in-memory.
Here is part of the table that corresponds to MCI's `open` commmand:

```cpp
static CmdTableRow table[] = {
  {"open"            ,MCI_OPEN      ,0          ,MCI_COMMAND_HEAD },
  {""                ,MCI_INTEGER   ,0          ,MCI_RETURN }      ,
  {"notify"          ,0x00000001L   ,-1         ,MCI_FLAG }        ,
  {"wait"            ,0x00000002L   ,-1         ,MCI_FLAG }        ,
  {"type"            ,0x00002000L   ,-1         ,MCI_STRING }      ,
  {"element"         ,0x00000200L   ,-1         ,MCI_STRING }      ,
  {"alias"           ,0x00000400L   ,-1         ,MCI_STRING }      ,
  {"shareable"       ,0x00000100L   ,-1         ,MCI_FLAG }        ,
  {""                ,0x00000000L   ,-1         ,MCI_END_COMMAND } ,
  // ...
```

For my implementation, I studied how Wine [implemented an MCI parser](https://github.com/wine-mirror/wine/blob/9e99c6f66d236101a084b6a3a24c98b5c8677fe5/dlls/winmm/mci.c).
Their code is a little esoteric, thanks to variable names like `dwParam2` and
`S_MciCmdTable[uTbl].lpTable`. It's not entirely the Wine project's fault
though, as they are following [old windows coding style conventions](https://learn.microsoft.com/en-us/windows/win32/stg/coding-style-conventions).

Studying Wine's code gave me some insight into what "compatibility layer" means.
If a program had code which executed MCI commands using the [Win32 API](https://learn.microsoft.com/en-us/windows/win32/multimedia/sending-a-command), Wine goes through and actually parses 
them at a high level, "translating" them into calls to Linux sound/video APIs.

This is exactly what we did in ScummVM, parsing the MCI commands and running the corresponding
calls to ScummVM's sound/video APIs.
You can find ScummVM's MCI parser implementation [here](https://github.com/scummvm/scummvm/blob/master/engines/director/lingo/lingo-mci.cpp).
We decided to steer away from the architecture provided in the afformentioned
patent, providing a more readable API by saving each command's arguments in a hash table 
rather than a byte array.

[^1]: ScummVM's [Discord server](https://discord.gg/4cDsMNtcpG).
[^2]: This data structure is basically a byte array, where each argument is saved at a specific offset.
