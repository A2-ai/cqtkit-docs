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
  title = "",
  xlabel = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A dataframe of QTc dataset |
| `fit` | a deltaQTCF model fit |
| `dv_col` | an unquoted column name of deltaQTC/Dependent variable measurements |
| `conc_col` | an unquoted column name of concentration measurements |
| `ntime_col` | an unquoted column name of nominal times |
| `trt_col` | an unquoted column name of treatment group, default NULL |
| `title` | a string of title of plot |
| `xlabel` | a string for the x-axis label of the plots |

## Returns

a ggarrange plot

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
 gof_residuals_trt_boxplots(data, fit, deltaQTCF, CONC, NTLD, TRTG)
```


