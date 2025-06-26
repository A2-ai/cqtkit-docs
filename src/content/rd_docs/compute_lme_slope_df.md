## Description

Takes the slope from a lme model and its confidence interval

## Usage

```r
compute_lme_slope_df(
  lme_mod,
  xdata_col,
  conf_int = 0.95
)
```

## Arguments

| Name | Description |
|------|-------------|
| `lme_mod` | fit nlme::lme model you"d like to extract slope from |
| `xdata_col` | unquoted name of column used as independent data in LME |
| `conf_int` | confidence interval for slope parameter |

## Returns

tibble of slope, lower_ci, upper_ci

## Examples

```r
df <- data %>% preprocess()
 
 lme_mod <- df %>%
   fit_qtc_linear_model(
       QT,
       RR,
       ID,
       method = 'REML',
       remove_rr_iiv = FALSE
   )
 
 slope_data <- compute_lme_slope_df(lme_mod, RR, 0.9)
 slope_data
```


