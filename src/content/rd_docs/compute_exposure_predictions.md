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
| `data` | A data frame containing C-QT analysis dataset |
| `fit` | An nlme::lme model object from model fitting |
| `conc_col` | An unquoted column name for concentration measurements used to fit the model |
| `treatment_predictors` | List of a values for contrast. conc will update |
| `control_predictors` | List of b values for contrast |
| `cmaxes` | Vector of Cmax for each dose |
| `conf_int` | Numeric confidence interval level (default: 0.9) |

## Returns

A data frame that contains median concentration,
 lower and upper bounds CI.

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 fit <- nlme::lme(
    fixed = deltaQTCF ~ 1 + CONC,
    random = ~ 1 | ID,
    method = "REML",
    data = data_proc
 )
 
 compute_exposure_predictions(
   data_proc,
   fit,
   CONC,
   list(CONC = 10)
 )
```


