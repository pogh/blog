---
title: Competing dlls in a (in-proc) Azure Function App
date: "2023-01-06"
description: "Or how c# giveth the problem and taketh the problem."
---

Iʼve been setting up ```Swagger``` using ```Swashbuckle``` in an Azure
Function App.  When it works, itʼs great, when it doesnʼt, not so.  The
problem is almost always a configuration problem, but which configuration...?

Using packages in the House of Cards architectural model, youʼll eventually 
end up in this situation, where one package wants one version of a ```dll```,
but everyone is happy with another version.  

```
Executing 'Functions.RenderSwaggerDocument' (Reason='This function was programmatically called via the host APIs.', Id=2e9b963b-6ad7-4460-9714-01dfeb43e219)
swagger.json was requested.

Could not load file or assembly 'Newtonsoft.Json, Version=13.0.0.0, Culture=neutral, PublicKeyToken=30ad4fe6b2a6aeed'. The system cannot find the file specified.
Executed 'Functions.RenderSwaggerDocument' (Succeeded, Id=2e9b963b-6ad7-4460-9714-01dfeb43e219, Duration=208ms)
```

You can get around this, by adding a custom resolver.  You intercept the request for the
the dll, and just return the one you have already loaded.  Otherwise it will go off looking
for the one you donʼt have, causing problems.


```c#
private Assembly NewtonsoftResolver(object sender, ResolveEventArgs args)
{
	if (args.Name.StartsWith("Newtonsoft.Json, "))
	{
		byte[] token = new AssemblyName(args.Name).GetPublicKeyToken();

		foreach (Assembly assembly in AppDomain.CurrentDomain.GetAssemblies()
													.Where(x => x.FullName.StartsWith("Newtonsoft.Json, "))
													)
		{
			// Want to make sure we're returning an assembly from NewtonSoft
			// and not another one with the same name
			if (token.SequenceEqual((new AssemblyName(assembly.FullName).GetPublicKeyToken())))
				return assembly;
		}

		return null;
	}
	else
		return null;
}
```

Then you add the handler in the startup.  

```c#
public class Startup : FunctionsStartup
{
	public override void Configure(IFunctionsHostBuilder builder)
	{
		AppDomain.CurrentDomain.AssemblyResolve += new ResolveEventHandler(NewtonsoftResolver);
```

