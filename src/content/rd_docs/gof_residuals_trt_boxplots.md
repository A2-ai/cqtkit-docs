## Description

generates boxplots for treatment group

## Usage

```r
gof_residuals_trt_boxplots(
  data,
  fit,
  dv_col,
  conc_col,
  ntime_col,
  trt_col = NULL,
  residual_references = c(
  -2,
  2
),
  style = list(
)
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `fit` | An nlme::lme model object from model fitting |
| `dv_col` | An unquoted column name for dependent variable measurements |
| `conc_col` | An unquoted column name for drug concentration measurements |
| `ntime_col` | An unquoted column name for nominal time since dose |
| `trt_col` | An unquoted column name for treatment group" |
| `residual_references` | Numeric vector of reference residual lines to add, default -2 and 2 |
| `style` | A named list of arguments passed to style_plot() |

## Returns

a ggarrange plot

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 fit <- fit_prespecified_model(
   data_proc,
   deltaQTCF,
   ID,
   CONC,
   deltaQTCFBL,
   TRTG,
   TAFD,
   "REML",
   TRUE
 )
 gof_residuals_trt_boxplots(data_proc, fit, deltaQTCF, CONC, NTLD, TRTG)
```


