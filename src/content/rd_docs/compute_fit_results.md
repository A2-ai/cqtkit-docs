## Description

computes all fitted results and residuals for GOF plots

## Usage

```r
compute_fit_results(
  data,
  fit,
  dv_col,
  conc_col,
  ntime_col,
  trt_col = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A dataframe of QTc dataset |
| `fit` | model fit |
| `dv_col` | an unquoted column name of observed model dependent variable |
| `conc_col` | an unquoted column name of observed Concentration measurements |
| `ntime_col` | an unquoted column name of time points for measurements |
| `trt_col` | an unquoted column name of treatment group, default NULL |

## Returns

a dataframe of predictions and residuals.

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
 
 compute_fit_results(data, fit, deltaQTCF, CONC, NTLD)
```


