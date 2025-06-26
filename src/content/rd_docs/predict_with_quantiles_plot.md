## Description

Plots predictions and 90% CI

## Usage

```r
predict_with_quantiles_plot(
  data,
  fit,
  conc_col,
  dv_col,
  treatment_predictors,
  control_predictors = NULL,
  reference_threshold = c(
  10
),
  conf_int = 0.9,
  nbins = 10,
  error_bars = "CI",
  xlabel = "Concentration (
  ng/mL
)",
  ylabel = bquote(
  Delta ~ "QTc (
  ms
)"
),
  title = ""
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A dataframe of QTc dataset |
| `fit` | a lme model to make predictions with |
| `conc_col` | an unquoted column name of concentration measurements |
| `dv_col` | an unquoted column name of dQTC measurements |
| `treatment_predictors` | list of a values for contrast. CONC will update |
| `control_predictors` | list of b values for contrast |
| `reference_threshold` | optional vector of numbers to add as horizontal dashed lines |
| `conf_int` | confidence interval fraction, default = 0.9 |
| `nbins` | number of bins for quantiles, or vector of cut points for computing average |
| `error_bars` | a string to denote which errorbars to show, CI, SE, SD or none. |
| `xlabel` | a string for xlabel, default "Concentration (ng/mL)" |
| `ylabel` | a string for ylabel, default bquote(Delta~"QTc (ms)") |
| `title` | a string for the plot title |

## Returns

a plot

## Examples

```r
data <- preprocess(data)
 fit <- fit_prespecified_model(
   data,
   deltaQTCF,
   ID,
   CONC,
   deltaQTCFBL,
   TRTG,
   TAFD,
   "REML",
   TRUE
 )
 predict_with_quantiles_plot(
   data,
   fit,
   CONC,
   deltaQTCF,
   treatment_predictors = list(
     CONC = 0,
     TRTG = "Verapamil HCL",
     TAFD = "2 HR",
     deltaQTCFBL = 0
   )
 )
```


