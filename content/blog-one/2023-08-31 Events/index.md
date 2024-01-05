---
title: Events
date: "2023-08-31"
description: ""
---

```csharp

    public delegate void FeedbackHandler(object sender, string message);

    public class Worker
    {
        public event FeedbackHandler Feedback;

```


```csharp
	
	Feedback?.Invoke(this, EventArgs.Empty);
	
```


```csharp
	worker.Feedback += (sender, message) =>
	{
		Console.WriteLine(message);
	};
```
		