---
title: Aborting Transactions
date: "2023-08-06"
description: Use `SET XACT_ABORT ON` to get the behaviour you’re probably expecting.
---

```sql
DROP TABLE IF EXISTS #temp

CREATE TABLE #temp (
	Id INT NOT NULL,
	Value NVARCHAR(MAX) NOT NULL
	)

BEGIN TRANSACTION

	INSERT INTO #temp
	VALUES (1, 'one');

	INSERT INTO #temp
	SELECT 2, 'two'
	WHERE 1 / 0 = 1;

COMMIT

-- Oops... one row is inserted
SELECT @@TRANCOUNT TRANCOUNT, *
FROM #temp;
```