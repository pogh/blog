---
title: SET XACT_ABORT ON
date: "2023-01-27"
description: "If youʼre using THROW in a transaction in a SQL Script, you need to SET XACT_ABORT ON if you want to automatically roll back the transation"
---

If youʼre doing something like this, especially in a stored procedure, i.e. the flow is returned to
the calling stored procedure or your session, you might expect that the transation is automatically
rolled back, but itʼs not.  

```sql
BEGIN TRANSACTION

-- Do something

THROW 106655104, 'Expected to update 0 rows.', 1;

COMMIT
```

This leaves you with an open transaction that you might not know about,
causing unintended consequences.  You need to set this option so the transaction is not
left open.

```sql
SET XACT_ABORT ON
```

Pro Tip: Table variables exist outside transactions, so you can use that to persist
any information you might want.
