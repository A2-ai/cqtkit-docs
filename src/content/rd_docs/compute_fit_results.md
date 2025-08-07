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
| `data` | A data frame containing C-QT analysis dataset |
| `fit` | An nlme::lme model object from model fitting |
| `dv_col` | An unquoted column name for observed model dependent variable |
| `conc_col` | An unquoted column name for observed Concentration measurements |
| `ntime_col` | An unquoted column name for time points for measurements |
| `trt_col` | An unquoted column name for treatment group, default NULL |

## Returns

a dataframe of predictions and residuals.

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
 
 compute_fit_results(data_proc, fit, deltaQTCF, CONC, NTLD)
```


