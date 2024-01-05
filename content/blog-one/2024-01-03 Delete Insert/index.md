---
title: Delete Insert
date: "2024-01-03"
description: ""
---

```sql
DELETE TOP (100)
FROM x
OUTPUT deleted.* INTO [dbo].[Audit]
FROM [dbo].[data] x
```