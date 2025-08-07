## Description

Computes the concentration needed for a upper conf_int prediction
 of the threshold value.

## Usage

```r
compute_conc_for_upper_pred(
  data,
  fit,
  conc_col_name,
  trt_col_name,
  treatment_group,
  threshold = 10,
  conf_int = 0.9
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `fit` | An nlme::lme model object from model fitting |
| `conc_col_name` | String of concentration (independent variable) column name |
| `trt_col_name` | String of treatment group column name |
| `treatment_group` | String of treatment group to make prediction for |
| `threshold` | Value used as upper CI prediction, default = 10 |
| `conf_int` | Numeric confidence interval level (default: 0.9) |

## Returns

list of the two potential solutions.

## Examples

```r
mod <- fit_prespecified_model(
   cqtkit_data_verapamil %>% preprocess(),
   deltaQTCF,
   ID,
   CONC,
   deltaQTCFBL,
   TRTG,
   TAFD,
   "REML",
   remove_conc_iiv = TRUE
 )
 compute_conc_for_upper_pred(
   cqtkit_data_verapamil %>% preprocess(),
   mod,
   "CONC",
   "TRTG",
   "Verapamil HCL"
 )
```


