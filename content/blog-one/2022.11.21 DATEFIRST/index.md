---
title: "DATEFIRST Danger"
date: "2022-11-21"
description: "DATEFIRST in SQL Server Agent Jobs might be different"
---

If youʼre using ```DATEFIRST``` in a SQL-Script you should explicitly set which 
day you want as the first day of the week, especially if your script is going
to run using SQL Server Agent as SQL Server Agent might have different 
language and date setting to you.


## This might not run on a Monday

```sql
SELECT 'Monday'
WHERE DATEPART(WEEKDAY, GETDATE()) = 1;
```

## This definitely will run on a Monday

```sql
SET DATEFIRST 1;

SELECT 'Monday'
WHERE DATEPART(WEEKDAY, GETDATE()) = 1;
```
