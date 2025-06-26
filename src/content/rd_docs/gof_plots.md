## Description

Makes goodness of fit plots

## Usage

```r
gof_plots(
  data,
  fit,
  dv_col,
  conc_col,
  ntime_col,
  trt_col = NULL,
  conc_xlabel = "Concentration ng/mL",
  title = "",
  dv_label = bquote(
  Delta ~ "QTc (
  ms
)"
),
  legend_location = c(
  "top",
  "bottom",
  "left",
  "right",
  "none"
),
  legend_title = "Treatment Group"
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
| `conc_xlabel` | a string for concentration plot xlabel |
| `title` | a string of title of plot |
| `dv_label` | a string of dv label default bquote(Delta ~ 'QTc (ms)') |
| `legend_location` | string for moving legend position. |
| `legend_title` | string for setting the legend title if trt_col is provided, default is Treatment Group |

## Returns

a 2x2 grid of plots

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
 
 gof_plots(
   data,
   fit,
   deltaQTCF,
   CONC,
   NTLD,
   TRTG)
```


