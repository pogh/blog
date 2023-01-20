---
title: PowerShell Magic
date: "2023-01-13"
description: "Or how I fixed those pesky file dates"
---

When downloading old files again from somewhere, you often get the
date of the download, not the actual (and useful) date.  If youʼre lucky
the date is somewhere in the filename, or maybe you just know what itʼs
supposed to be.  

You can then use PowerShell to set the file dates.

```powershell
foreach($file in Get-ChildItem *.2212*.ZIP) {$(Get-Item $file.Fullname).CreationTime="2022-12-01"}
foreach($file in Get-ChildItem *.2212*.ZIP) {$(Get-Item $file.Fullname).LastWriteTime="2022-12-01"}
foreach($file in Get-ChildItem *.2212*.ZIP) {$(Get-Item $file.Fullname).LastAccessTime ="2022-12-01"}
```