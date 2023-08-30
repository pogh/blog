---
title: Events
date: "2023-08-31"
description: ""
---

```csharp

	public event EventHandler MyEvent;

```


```csharp
	
	MyEvent?.Invoke(this, EventArgs.Empty);
	
```