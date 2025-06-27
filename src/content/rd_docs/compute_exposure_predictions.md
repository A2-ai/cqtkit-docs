## Description

Predicts dQTC over range of concentration values with contrast.
 To help keep the predictions quick, the concentration values to predict at are
 done at on order of magnitude of concentration values, if max(conc) = 7340, then by = 100

## Usage

```r
compute_exposure_predictions(
  data,
  fit,
  conc_col,
  treatment_predictors,
  control_predictors = NULL,
  cmaxes = NULL,
  conf_int = 0.9
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc dataset |
| `fit` | the lme model to use for predictions |
| `conc_col` | an unquoted column name of concentration measurements used to fit the model |
| `treatment_predictors` | list of a values for contrast. conc will update |
| `control_predictors` | list of b values for contrast |
| `cmaxes` | vector of Cmax for each dose |
| `conf_int` | confidence interval for predictions. Default 90% |

## Returns

A data frame that contains median concentration,
 lower and upper bounds CI.

## Examples

```r
data <- preprocess(data)
 
 fit <- nlme::lme(
    fixed = deltaQTCF ~ 1 + CONC,
    random = ~ 1 | ID,
    method = "REML",
    data = data
 )
 
 compute_exposure_predictions(
   data, fit, CONC, list(CONC = 10))
```


