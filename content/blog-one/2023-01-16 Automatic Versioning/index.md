---
title: Automatic Versioning
date: "2023-01-16"
description: "Generate a unique incrementing version with every build in Visual Studio."
---

This is quite a cool trick for a c# application in Visual Studio, if youʼre not part of
a serious development cycle.  You can set the version number automatically when you build 
your project.  The advantage is, not only does it increment, but the version number has 
some meaning (to you, at least).

You need to edit the ```.csproj``` file and modify the ```version``` tags.


```c#
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
	<snip/>
    <Version>3.$([System.DateTime]::Now.ToString("yy")).$([System.DateTime]::Now.DayOfYear)</Version>
    <FileVersion>3.$([System.DateTime]::Now.ToString("yy")).$([System.DateTime]::Now.DayOfYear).$([System.DateTime]::Now.ToString("HHmm"))</FileVersion>
    <AssemblyVersion>3.$([System.DateTime]::Now.ToString("yy")).$([System.DateTime]::Now.DayOfYear).$([System.DateTime]::Now.ToString("HHmm"))</AssemblyVersion>
  </PropertyGroup>
  <snip/>
</Project>
```