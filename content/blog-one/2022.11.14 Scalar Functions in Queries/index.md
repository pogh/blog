---
title: Scalar Functions in Queries
date: "2022-11-14"
description: "Don’t forget: Scalar Functions prevent queries going multi-threaded"
---

Something like this might take longer than you thought because it won’t go
multi-threaded.

```sql
UPDATE [dwh].[WHATEVER_LIST]
SET WhateverNumber = dwh.fn_get_that_number(x);
```

You can, however, get an apparent performance improvement but doing something
like this:

```sql
SELECT Id, dwh.fn_get_that_number(x) NewWhateverNumber 
INTO #numbers 
FROM [dwh].[WHATEVER_LIST];

UPDATE y
SET WhateverNumber = x.NewWhateverNumber
FROM #numbers x
JOIN [dwh].[WHATEVER_LIST] y ON x.Id = y.Id;

DROP TABLE #numbers
```

The first part stays single threaded, but the second part goes multi threaded.
You still have to do the same amount of work, but it might you’re wait time
_might_ be reduced.  Of course, you have to check for you situation.
