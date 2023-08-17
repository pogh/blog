---
title: Powershell Zips
date: "2023-08-01"
description: ""
---

```powershell
powershell 
	$files = get-childitem -Path c:\blah
	$files | Get-Member
	$files | select-object Name, Fullname
	$files[0].GetType()
```
