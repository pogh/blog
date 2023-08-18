---
title: SSIS Reporting
date: "2023-08-07"
description: SQL to get SSIS job progress
---

Find the job you’re interested in:

```sql
USE [SSISDB]
GO

SELECT *
FROM catalog.operations
WHERE DATEDIFF(MINUTE, start_time, ISNULL(end_time, GETDATE())) > 10
ORDER BY start_time DESC
```

And use the Operation Id here:

```sql
DECLARE @operation_id INT = /* ????? */; 

SELECT 
	msg.operation_message_id,
	msg.operation_id,
	msg.message_time,
	CASE message_type
		WHEN 120 THEN 'Error'
		WHEN 110 THEN 'Warning'
		WHEN 70  THEN 'Information'
		WHEN 10  THEN 'Pre-validate'
		WHEN 20  THEN 'Post-validate'
		WHEN 30  THEN 'Pre-execute'
		WHEN 40  THEN 'Post-execute'
		WHEN 60  THEN 'Progress'
		WHEN 50  THEN 'StatusChange'
		WHEN 100 THEN 'QueryCancel'
		WHEN 130 THEN 'TaskFailed'
		WHEN 90  THEN 'Diagnostic'
		WHEN 200 THEN 'Custom'
		WHEN 140 THEN 'DiagnosticEx'
		WHEN 400 THEN 'NonDiagnostic'
		WHEN 80	 THEN 'VariableValueChanged'
		ELSE 'Unknown' 
		END message_type,
	CASE message_source_type
		WHEN 10 THEN 'Entry APIs, such as T-SQL and CLR Stored procedures'
		WHEN 20 THEN 'External process used to run package (ISServerExec.exe)'
		WHEN 30 THEN 'Package-level objects'
		WHEN 40 THEN 'Control Flow tasks'
		WHEN 50 THEN 'Control Flow containers'
		WHEN 60 THEN 'Data Flow task'
		ELSE 'Unknown' 
		END message_source_type,
	msg.message
FROM  catalog.operation_messages  AS msg
JOIN  catalog.operations AS opr ON opr.operation_id = msg.operation_id
WHERE opr.operation_id = @operation_id
  AND msg.message_type NOT IN (10, 20, 30, 40) -- Ignore Pre and Post
ORDER BY operation_id DESC, msg.operation_message_id DESC

```
