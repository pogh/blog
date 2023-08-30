---
title: Thread Safe Windows Controls
date: "2023-08-30"
description: ""
---

```csharp

	this.Invoke((MethodInvoker)delegate
	{
		Button.Enabled = true;
	});
	
```
