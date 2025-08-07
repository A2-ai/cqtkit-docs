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
| `lme_mod` | An nlme::lme model object from model fitting |
| `xdata_col` | An unquoted name of column used as independent data in LME |
| `conf_int` | Numeric confidence interval level (default: 0.9) |

## Returns

tibble of slope, lower_ci, upper_ci

## Examples

```r
df <- cqtkit_data_verapamil %>% preprocess()
 
 lme_mod <- df %>%
   fit_qtc_linear_model(
       QT,
       RR,
       ID,
       method = 'REML',
       remove_rr_iiv = FALSE
   )
 
 slope_data <- compute_lme_slope_df(lme_mod, RR, 0.9)
```


