---
title: Variance
date: "2022-11-26"
description: "**Constancy of variance** is the most important assumption we make in most statistical analyses.  When the variances are different, don’t compare the means."
---

The greater the variance, the greater the uncertainty about the hypotheses.

Variance is used in two main ways:

 * for establishing measures of unreliability (e.g. confidence intervals)
 * for testing hypotheses (e.g. Student’s t test)

## Variance

Variance is the sum of squares divided by degrees of freedom

$$
variance = s^2 = \frac{\sum{(y - \bar{y})^2}}{n - 1}
$$

The sum of the squares is a good for assessing variability, but increases with every data point.  
We could divide it by $n$, but the mean value ȳ is a parameter estimated from the data, so we lose one degree of freedom as a result.

*Degrees of Freedom* is the sample size, n, minus the number of parameters, p, estimated from the data.

```r
var(y)
```

### *F*-test

The equation for comparing two variances with the f-test is:

$$
F = \frac{{s^2}_1}{{s^2}_2}
$$

If the variances are equal, the ratio of the variances will equal.

Therefore the null hypothesis will always be that the variances are equal.

```r
var.text(x, y)
```

## Standard Error of the Mean

Measures how far the sample mean of the data is likely to be from the true population mean.

$$
SE_{\bar{y}} = \sqrt{\frac{s^2}{n}}
$$

```r
sqrt(var(x)/n)
```

Write like this:

> The mean of X was *mean* ± *standard error* units (1 s.e., n = 10)


## Confidence Intervals

A confidence interval shows the likely range in which the mean would fall if the sampling exercise were to be repeated.

$$
confidence interval = t-value \times standard error
$$

```r
# 95% confidence = (100% - 95%) / 2
# degrees of freedom
qt(0.25, df) 
qt(0.975, df)

sqrt(var(x)/n) * qt(0.975, df)
```

Write like this:

> The mean of X was *mean* ± *confidence interval* units (95% CI, n = 10)

## Bootstrapping

Repeated sampling (with replacement) from the original sample.

```r
b1<-boot(x, function(u,i) mean(u[i]), R=1000)
boot.ci(b1, type=c("norm", "basic")))
```
