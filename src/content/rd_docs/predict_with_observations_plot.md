## Description

Plots predictions of the model with observed values

## Usage

```r
predict_with_observations_plot(
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
| `data` | a dataframe of QTc dataset |
| `fit` | the lme model to make predictions with |
| `conc_col` | an unquoted column name of drug concentration measurements |
| `dv_col` | an unquoted column name of dQTC measurements |
| `treatment_predictors` | a list for predictions with model. Should contain a value for each predictor in the model. |
| `control_predictors` | an optional list for contrast predictions |
| `reference_threshold` | optional vector of numbers to add as horizontal dashed lines |
| `conf_int` | a float for the fractional confidence interval. default = 0.9 |
| `xlabel` | a string for xlabel |
| `ylabel` | a string for ylabel |
| `title` | a string of the plot title |

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
 predict_with_observations_plot(
   data,
   fit,
   CONC,
   deltaQTCF,
   list(
     CONC = 0,
     TRTG = "D - A2Ai",
     TAFD = "2 HR",
     deltaQTCFBL = 0
   ),
   conf_int = 0.9
 )
```


