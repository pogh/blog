---
title: Powershell Zips
date: "2023-08-01"
description: Powershell basics
---

```powershell
$files = get-childitem -Path c:\blah
```
```powershell
$files | Get-Member
```
```powershell
$files | select-object Name, Fullname
```
```powershell
$files[0].GetType()
```
