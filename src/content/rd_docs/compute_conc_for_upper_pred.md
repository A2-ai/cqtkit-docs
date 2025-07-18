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
| `data` | dataset of QTc analysis data |
| `fit` | an nlme::lme fitted model |
| `conc_col_name` | string of concentration (independent variable) column name |
| `trt_col_name` | string of treatment group column name |
| `treatment_group` | string of treatment group to make prediciton for |
| `threshold` | value used as upper CI prediction, default = 10 |
| `conf_int` | confidence interval, default = 0.9 |

## Returns

list of the two potential solutions.

## Examples

```r
mod <- fit_prespecified_model(
   data %>% preprocess(),
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
   data %>% preprocess(),
   mod,
   "CONC",
   "TRTG",
   "Verapamil HCL"
 )
```


