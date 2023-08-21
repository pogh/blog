---
title: TRY_PARSE
date: "2023-08-21"
description: SQL to get SSIS job progress
---

Find the job you’re interested in:

```sql
SELECT TRY_PARSE('12,34' AS numeric(4,2) USING 'de') x
```
