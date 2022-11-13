---
title: Statistics - An Introduction using R
date: "2022-10-20T16:48:00Z"
description: "A test entry"
---

## Fundamentals

* **Response Variable**: The variable you are attempting to understand.  It goes on the y-axis of the graph.
* **Explanatory Variable**: Explains the variation in the response variable.

	* **Continuous Variable**: Any real numbered value
	* **Categorical Variable**: A *factor* with *levels*
	
### Statistical Method

1. The explanatory variables:
	a. All explanatory variables continuous: Regression
	b. All explanatory variables categorical: ANOVA (Analysis of variance)
	c. Some explanatory variables continuous, some categorical: ANCOCA (Analysis of covariance)
	
2. The response variable:
	a. Continuous: Regression, ANOVA, ANCOVA
	b. Proportion: Logistic Regression
	c. Count: Log Linear Regression
	d. Binary: Binary Logistic Analysis
	e. Time at death: Survival Analysis

### Significance

Result was unlikely by chance (if the null hypothesis were true)

* Null hypothesis: Nothing is happening
* Alternative hypothesis: Something is happening

### p-Value

* The probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis is true.

### Interpretation

| Null hypothesis || Actual Situation  |
|-----------------|------------------|-|
|                 | true     | false   |
| Accept          | correct  | Type II |
| Reject          | Type I   | correct |

### Experimental Design

* Replication: Increases reliability
	* must be independant
	* must not be part of time series
	* must not be grouped together

* Randomisation: Reduces bias

* No controls, no conclusions

* Power: 