---
title: Statistical Models
date: "2022-11-22"
description: Models are fitted to data (not the other way round)
---

## Models

* ```lm```: fits a linear model assuming normal errors and constant variance; generally this is used for regression analysis using continuous explanatory variables. The default output is summary.lm

* ```aov```: *Analysis of Variance Model* is an alternative to lm with summary.aov as the default output. Typically used only when there are complex error terms to be estimated (e.g. in split-plot designs where different treatments are applied to plots of different sizes)

* ```glm```: fits generalized linear models to data using categorical or continuous explanatory variables, by specifying one of a family of error structures (e.g. Poisson for count data or binomial for proportion data) and a particular link function

* ```gam```: fits generalized additive models to data with one of a family of error structures (e.g. Poisson for count data or binomial for proportion data) in which the continuous explanatory variables can (optionally) be fitted as arbitrary smoothed functions using non-parametric smoothers rather than specific parametric functions.

* ```lmer```: fits linear mixed effects models with specified mixtures of fixed effects and random effects and allows for the specification of correlation structure amongst the explanatory variables and autocorrelation of the response variable (e.g. time series effects with repeated measures). The older lme is an alternative

* ```nls```: fits a non-linear regression model via least squares, estimating the parameters of a specified non-linear function

* ```nlme```: fits a specified non-linear function in a mixed effects model where the parameters of the non-linear function are assumed to be random effects; allows for the specification of correlation structure amongst the explanatory variables and autocorrelation of the response variable (e.g. time series effects with repeated measures).

* ```loess```: fits a local regression model with one or more continuous explanatory variables using non-parametric techniques to produce a smoothed model surface

* ```rpart```: fits a regression tree model using binary recursive partitioning whereby the data are successively split along coordinate axes of the explanatory variables so that at any node, the split is chosen that maximally distinguishes the response variable in the left and the right branches. With a categorical response variable, the tree is called a classification tree, and the model used for classification assumes that the response variable follows a multinomial distribution

## Functions

&nbsp; | &nbsp;
---|---
```summary``` | produces parameter estimates and standard errors from lm, and ANOVA tables from aov; this will often determine your choice between lm and aov. For either lm or aov you can choose summary.aov or summary. lm to get the alternative form of output (an ANOVA table or a table of parameter estimates and standard errors; see p. 158)
```plot``` | produces diagnostic plots for model checking, including residuals against fitted values, influence tests, etc. 
```anova``` | a useful function for comparing two or more different models and producing ANOVA tables (and alternative to AIC)
```update``` |used to modify the last model fit; it saves both typing effort and computing time
```coef``` | the coefficients (estimated parameters) from the model fitted the fitted values, predicted by the model for the values of the explanatory variables that appear in the data frame
```resid``` | the residuals (the differences between measured and predicted values of y)
```predict``` | uses information from the fitted model to produce smooth functions for plotting a curve through the scatterplot of your data. 