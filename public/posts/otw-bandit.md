---
title: |
  My Solutions to OverTheWire: Bandit
author: Anthony Du
description: "My Solutions to OverTheWire: Bandit"
date: "2023-07-08"
---

# My Solutions to OverTheWire: Bandit

This (ongoing) post contains my solutions to the online wargame &mdash; [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/).

This post is actually my original motive to creating this blog, [blog.anthonydu.com](https://blog.anthonydu.com). I wanted to show off, or at least keep a record, of my solutions to this very interesting game.

I played this game while taking the free online course Computing Fundamentals on [Roppers Academy](https://www.roppers.org). I took this course as a prerequisite to its Capture the Flag Bootcamp.

I ran this game in the built-in terminal app on Fedora Workstation 38 (aarch64) on VMware Fusion.

## Tips

- The command `exit` can be used to log out of and close the SSH connection.

- Sometimes, running `[command] --help` instead of `man [command]` offers a more condensed version of the manual for a command.

## Solutions

### Level 0

```
$ ssh bandit.labs.overthewire.org -p 2220 -l bandit0
```

Then enter the password: `bandit0`.

### Level 0 &rarr; Level 1

```
$ cat readme
```

### Level 1 &rarr; Level 2

```
$ cat ./-
$ cat < -
```

### Level 2 &rarr; Level 3

```
$ cat spaces\ in\ this\ filename
$ cat "spaces in this filename"
$ cat 'spaces in this filename'
```

### Level 3 &rarr; Level 4

```
$ ls -a inhere
```

Then use `cat` to read the hidden file.

### Level 4 &rarr; Level 5

```
$ file inhere/*
```

Then use `cat` to read the only file with ASCII text.

### Level 5 &rarr; Level 6

```
$ find inhere -type f -size 1033c
```

Then use `cat` to read the only file that was found.

### Level 6 &rarr; Level 7

```
$ find / -type f -user bandit7 -group bandit6 -size 33c 2> /dev/null
```

Then use `cat` to read the only file that was found.

`2> /dev/null` is used to discard the standard error messages.

### Level 7 &rarr; Level 8

```
$ grep millionth data.txt
```

### Level 8 &rarr; Level 9

```
$ cat data.txt | sort | uniq -u
```

### Level 9 &rarr; Level 10

```
$ grep -Eao "=+ [[:alnum:]]+" data.txt
```

### Level 10 &rarr; Level 11

```
$ base64 -d data.txt
```

### Level 11 &rarr; Level 12

```
$ cat data.txt | tr A-Za-z N-ZA-Mn-za-m
```

### Level 12 &rarr; Level 13

```
$ mkdir /tmp/myname123
$ cp data.txt /tmp/myname123/data.txt
$ cd /tmp/myname123

$ xxd -r data.txt > data

$ file data
data: gzip compressed data
$ gzip -cd data > data2

$ file data2
data2: bzip2 compressed data
$ bzip2 -cd data2 > data3

$ file data3
data3: gzip compressed data
$ gzip -cd data3 > data4

$ file data4
data4: POSIX tar archive (GNU)
$ tar -xOf data4 > data5

$ file data5
data5: POSIX tar archive (GNU)
$ tar -xOf data5 > data6

$ file data6
data6: bzip2 compressed data
$ bzip2 -cd data6 > data7

$ file data7
data7: POSIX tar archive (GNU)
$ tar -xOf data7 > data8

$ file data8
data8: gzip compressed data
$ gzip -cd data8 > data9

$ file data9
data9: ASCII text
$ cat data9
```
