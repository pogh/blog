---
title: Debug Windows Service
date: "2024-01-04"
description: ""
---


## Service.cs

```csharp
#if DEBUG
        internal void TestStartupAndStop(string[] args)
        {
            for (int j = 0; j < 1; j += 1)
            {
                this.OnStart(args);
                Debug.WriteLine("started");
                Console.ReadLine();
                this.OnStop();
                Debug.WriteLine("stopped");
                Console.ReadLine();
            }
        }
#endif
```

## Program.cs`

```csharp
        static void Main(string[] args)
        {
#if DEBUG
            if (Environment.UserInteractive)
            {
                Service service = new Service();
                service.TestStartupAndStop(args);
            }
            else
            {
#endif
                ServiceBase[] ServicesToRun;
                ServicesToRun = new ServiceBase[]
                {
                new Service()
                };
                ServiceBase.Run(ServicesToRun);
#if DEBUG
            }
#endif
        }
```
