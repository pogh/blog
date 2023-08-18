---
title: Installed DLLs in GAC
date: "2023-08-05"
description: Find the the DDLs installed in the GAC using a search term.
---

```cmd
@SET GACUTIL="C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe"

%GACUTIL% -l | findstr FindThisDLL
```