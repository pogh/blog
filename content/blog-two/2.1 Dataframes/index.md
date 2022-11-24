---
title: Dataframes
date: "2022-11-23"
description: Get to know your data first
---

Load a dataframe: ```worms <- read.csv("worms.csv")```

Variables in dataframe: ```names(worms)```

Contents of dataframe: ```worms```

Subscripts: ```worms[,1:3]```

Subscript with logical test:```worms[worms$Area>3 & worms$Slope <3,]```

Sorting: ```worms[order(worms$Area),]```

Sorting (Reverse): ```worms[rev(order(worms$Area)),]```

Summary: ```summary(worms)```

Summary (Explanatory Variables): ```with(worms, tapply(Worm.density,Vegetation, mean))```

Summary (Aggregate): ```aggregate(worms[ , c(2,3,5,7)], list(Community = worms$Vegetation), mean)```

## Inspecting the data

```r
data <- read.csv("..")
head(data)
plot(data$y)
```

Returns index: ```which(y > 10)```

Returns count of factor levels: ```table(data$column)```

Conditioning Plot: ```coplot(y∼x|z,pch=16,panel=panel.smooth)```

___
p.39