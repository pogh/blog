---
title: Powershell Magic
date: "2023-01-13"
description: "Or how I fixed those pesky file dates"
---

```{powershell}
foreach($file in Get-ChildItem *.2212*.ZIP) {$(Get-Item $file.Fullname).CreationTime="2022-12-01"}
foreach($file in Get-ChildItem *.2212*.ZIP) {$(Get-Item $file.Fullname).LastWriteTime="2022-12-01"}
foreach($file in Get-ChildItem *.2212*.ZIP) {$(Get-Item $file.Fullname).LastAccessTime ="2022-12-01"}
```