---
title: PowerShell Logons Logoffs
date: "2024-01-01"
description: ""
---

```powershell
$sid=([System.Security.Principal.WindowsIdentity]::GetCurrent()).User.Value
$message="*" + $sid + "*"
Get-EventLog -LogName Security -Message $message | Where-Object {$_.EventID -in (4624,4647)} | Select-Object -Property TimeGenerated, Message```
```
