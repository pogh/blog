---
title: Central tendency
date: "2022-11-25"
description: Measures cluster around certain intermediate values
---

The central tendency is a single number that represents the most common value for a list of numbers.

### Mode

The values that occur most frequently are called the *mode*.  You can see this on a histogram.  

### Arithmetic Mean

The quantitative measure of central tendency is the *arithmetic mean*.
A sample mean is typically denoted ȳ (read "y-bar").

$$
\bar{y} = \frac{\sum y}{n}
$$

```r
mean(data$y)
```

The arithmetic mean is appropriate when all values in the data sample have the same units of measure

### Geometric Mean

The geometric mean is more accurate and effective, when there is a volatility in the data set.  Not as affected by outliers but all values must be positive.

$$
\hat{y} = \sqrt[n]{\Pi y}
$$

This makes it well-suited for describing multiplicative relationships, such as rates & ratios, even if those ratios are on different scales (i.e. do not have the same denominator).

```r
exp(mean(log(data)))
```

### Harmonic mean

Harmonic mean sometimes appropriate for situations when the average *rate* is desired.  A *rate* is the ratio between two quantities with different measures, e.g. speed, acceleration, frequency, etc.

$$
\tilde{y} = \frac{n}{\sum{\frac{1}{y}}}
$$

```r
1/mean(1/data)
```

## Notes

It’s good practice to graph the logarithms rather than the raw values on data that change multiplicatively.

* ȳ = sample mean
* ŷ = estimate (geometric) mean
* ỹ = (y ‘curl’) harmonic mean