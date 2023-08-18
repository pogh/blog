---
title: Table Definition
date: "2023-08-03"
description: Table definition of a Temporary Table
---

```sql
SELECT s.name schema_name, t.name table_name, c.name column_name, y.name type_name, c.max_length, c.precision, c.scale
FROM tempdb.sys.schemas s 
JOIN tempdb.sys.tables t ON s.schema_id = t.schema_id
JOIN tempdb.sys.columns c ON t.object_id = c.object_id
JOIN tempdb.sys.types y ON c.system_type_id = y.system_type_id AND c.user_type_id = y.user_type_id
WHERE t.name LIKE '%temptablename%'
```