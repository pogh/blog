---
title: Fundamentals
date: "2022-11-22"
description: Variation is normal, but how much occurs by chance alone?  Statistics answers this question.
---


## Definitions

* **Response** Variable: Goes on the *y-axis* (up and down) and is the thing you're trying to understand
* **Explanatory** Variable: Goes on the *x-axis* (along the bottom) and you're interested in the extent of change is associated with the response variable
* **Continuous Measurement**: A *real* number that can take any value
* **Categorical Variable**: Is a *factor* with two or more *levels*
* **Significance**: A result is unlikely due to chance

## Significance

* **null hypothese**: Nothing is happening
* **p-value**: An estimate of the probability that a value of the test statistic, or a value more extreme than this, could have occurred by chance when the null hypothesis is true.

## Chosing a statistical method

### The explanatory variables (pick one of the rows):

1. All explanatory variables continuous → *Regression*
1. All explanatory variables categorical → *Analysis of variance (ANOVA)*
1. Some explanatory variables continuous some categorical → *Analysis of covariance (ANCOVA)*

### The response variable (pick one of the rows):

1. Continuous → *Regression, ANOVA or ANCOVA*
1. Proportion → *Logistic regression*
1. Count → *Log linear models*
1. Binary → *Binary logistic analysis*
1. Time at death → *Survival analysis*

### Interpretation

Null hypothesis | Actual Situation | Actual Situation
---|---|---
 | | True |  False
Accept | Correct decision | *Type II / β*
Reject | *Type I / α* | Correct decision


___
*Page 4: Model Choice*