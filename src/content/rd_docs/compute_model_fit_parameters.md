## Description

Converts tTable of summary(model_fit) to tibble and adds CIs.

## Usage

```r
compute_model_fit_parameters(
  fit,
  trt_col_name = "TRTG",
  tafd_col_name = "TAFD",
  id_col_name = "ID",
  conf_int = 0.95
)
```

## Arguments

| Name | Description |
|------|-------------|
| `fit` | a model fit |
| `trt_col_name` | string of column name of trt used in model fitting |
| `tafd_col_name` | string of column name of tafd used in model fitting |
| `id_col_name` | string of column name of the id used in model fitting for random effects |
| `conf_int` | confidence interval, default = 0.95 |

## Returns

a tibble of model_fit parameters

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
 compute_model_fit_parameters(fit)
```


