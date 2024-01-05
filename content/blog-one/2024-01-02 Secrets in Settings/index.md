---
title: Secrets in Settings
date: "2024-01-02"
description: ""
---

```text
	secrets
	git update-index --assume-unchanged secrets.txt
```


```csharp
	string[] secrets = File.ReadAllText("secrets.txt").Split(Environment.NewLine);
	Settings.Connection = secrets[1];
```