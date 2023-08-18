---
title: Build Task for SSIS task
date: "2023-08-04"
description: Post-build event command line to install an SSIS Task in the GAC when developing in Visual Studio
---

```cmd
@SET TASKDIR="C:\Program Files (x86)\Microsoft SQL Server\160\DTS\Tasks\"
@SET GACUTIL="C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\gacutil.exe"

Echo Installing dll in GAC
Echo %CD%
Echo $(OutDir)
Echo $(TargetFileName)

%GACUTIL% -iF "$(TargetFileName)"

Echo Copying files to Tasks
Echo copy "$(TargetFileName)" %TASKDIR%
copy "$(TargetFileName)" %TASKDIR%
```