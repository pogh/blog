---
title: Table Variables for Error Handling
date: "2023-08-07"
description: "When rolling back a transaction, you can stored the message in table variable."
---

```sql

DROP TABLE IF EXISTS #temp

CREATE TABLE #temp (
	Id INT NOT NULL,
	Value NVARCHAR(MAX) NOT NULL
	)

DECLARE @@errors TABLE (
	ErrorText NVARCHAR(MAX)
	);

BEGIN TRANSACTION

	BEGIN TRY

		INSERT INTO #temp
		VALUES (1, 'one');

		INSERT INTO #temp
		SELECT 2, 'two'
		WHERE 1 / 0 = 1;

		COMMIT

	END TRY
	BEGIN CATCH

		INSERT INTO @@errors
		VALUES (ERROR_MESSAGE())

		ROLLBACK

	END CATCH

SELECT @@TRANCOUNT TRANCOUNT, *
FROM @@errors

```