---
title: How to Resize Virtual Machine Disk in CLI (VMware Fusion)
author: Anthony Du
description: "This article outlines the process of resizing a virtual machine disk in VMware Fusion using the command line interface."
datePublished: "2023-08-15"
---

I was in the process of attempting to [switching my Fedora Workstation's desktop environment from Gnome to KDE](https://discussion.fedoraproject.org/t/is-it-possible-to-switch-completely-to-to-kde-from-gnome/66747/5?replies_to_post_number=1) (I did not want to put myself through backing-up all my data and reinstall the entire operating system using the Fedora Spins provided on Fedora's official website. This linked discussion post reply was amazing btw. Worked wondrously for the job) when my virtual disk ran out of space. I was forced to resize the virtual disk in both VMware Fusion and the operating system itself in CLI (since I just got rid of the GUI) to continue the installation. It was not a very straight forward process as I initially thought, but thanks to numerous online resources I was able to get everything to work in a few minutes. Here's the entire process.

```shell
$ sudo fdisk -l # check partition table
GPT PMBR size mismatch (PREV_SIZE != NEW_SIZE) will be corrected by write.

$ sudo fdisk /dev/nvme0n1
Command (m for help): write
The partition table has been altered.
Syncing disks.

$ sudo parted /dev/nvme0n1 resizepart 3 100%
$ sudo btrfs filesystem resize max /
Resize device id 1 from PREV_SIZE to max
$ df -h # check that / has been resized
```
