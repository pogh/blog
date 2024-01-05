---
title: COALESCE Text Rows
date: "2024-01-05"
description: ""
---


## Service.cs

```sql
DECLARE @string NVARCHAR(MAX)

SELECT 
	@string = COALESCE(@string + CHAR(13), '') + string
FROM [dbo].[table]

PRINT @string;
```
