---
title: Fundamentals
date: "2022-11-21"
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

## Choosing a statistical method

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

## Model Choice

Model choice is the big issues in statistics.  Chosing the model is part of the process.

They key assumptions are:

* random sampling
* constant variance
* normal errors
* independent errors
* additive effects

There is not **one** model, but the **best** model produces the least unexplained variation (*minimal residual deviance*).
We judge the model on the basis how likely the data would be if the model were correct.

## Experimental Design

* **Replication**: You replicate to increase reliability

* **Randomization**: You randomize to reduce bias

Good experiment design:

* the principle of parsimony: The correct explanation is the simplest explanation
* the power of a statistical test
* controls: No controls, no conclusions.
* spotting pseudoreplication and knowing what to do about it
* the difference between experimental and observational data (non-orthogonality)

### Replication

* must be independent
* must not form part of a time series (data collected from the same place on successive occasions are not independent)
* must not be grouped together in one place (aggregating the replicates means that they are not spatially independent)
* must be measured at an appropriate spatial scale
* ideally, one replicate from each treatment ought to be grouped together into a block, and all treatments repeated in many different blocks.
* repeated measures (e.g. from the same individual or the same spatial location) are not replicates (this is probably the commonest cause of pseudoreplication in statistical work)

### Power

The power of a test is the probability of rejecting the null hypothesis when it is false. It has to do with Type II errors: β is the probability of accepting the null hypothesis when it is false
Most statisticians work with α = 0.05 and β = 0.2.  
The power of a test is defined as 1 - β = 0.8 under the standard assumptions.

```r
power.t.test(
	delta = NULL,   	# true difference in means
	sd = 1, 			# standard deviation (obtained from the literature or from a small pilot experiment)
	sig.level = 0.05,
    power = NULL,		# power of test (1 minus Type II error probability)
)
```