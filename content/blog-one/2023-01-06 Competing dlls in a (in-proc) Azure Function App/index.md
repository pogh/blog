---
title: Competing dlls in a (in-proc) Azure Function App
date: "2023-01-06"
description: "Or how c# giveth the problem and taketh the problem."
---

```
Executing 'Functions.RenderSwaggerDocument' (Reason='This function was programmatically called via the host APIs.', Id=2e9b963b-6ad7-4460-9714-01dfeb43e219)
swagger.json was requested.

Could not load file or assembly 'Newtonsoft.Json, Version=13.0.0.0, Culture=neutral, PublicKeyToken=30ad4fe6b2a6aeed'. The system cannot find the file specified.
Executed 'Functions.RenderSwaggerDocument' (Succeeded, Id=2e9b963b-6ad7-4460-9714-01dfeb43e219, Duration=208ms)
Executed HTTP request: {
  requestId: "30bc2f95-ff33-492c-b107-8f6d325fe907",
  identities: "",
  status: "500",
  duration: "216"
}
```

```{c#}
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            // ----------------------------------------------------------------
            // Work around for OpenApi wanting a different NewtonSoft.Json
            // version that everyone else

            AppDomain.CurrentDomain.AssemblyResolve += new ResolveEventHandler(NewtonsoftResolver);
```




```{c#}
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