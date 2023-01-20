---
title: sp_rename
date: "2023-01-20"
description: "Be careful with the parameter @newname."
---

When youʼre using ```sp_rename``` in your scripts, you can be clever
and use square brackets for the ```@oldname``` parameter, but
you can't use them for the ```@newname``` parameter, unless you
want the square bracket to part of the name.

## What you have

![What you have](image1.png)

## What you don't want

```sql
EXEC sp_rename  @objname = '[dbo].[Empty]', @newname = '[dbo].[NotEmpty]'
```

![What you don't want](image2.png)

## What you do want

```sql
EXEC sp_rename  @objname = '[dbo].[Empty]', @newname = 'Empty'
```

![What you *do* want](image3.png)