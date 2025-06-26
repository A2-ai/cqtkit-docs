## Description

plots boxplots of residuals over Nominal Times

## Usage

```r
gof_residuals_time_boxplots(
  data,
  fit,
  dv_col,
  conc_col,
  ntime_col,
  trt_col = NULL,
  title = "",
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
| `trt_col` | an unquoted column name of treatment group, default NULL will use for filling boxplots |
| `title` | a string of title of plot |
| `legend_location` | location of legend ggpubr::ggarrange argument |
| `legend_title` | string for setting the legend title if trt_col is provided, default is Treatment Group |

## Returns

a plot

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
 
 gof_residuals_time_boxplots(
   data,
   fit,
   deltaQTCF,
   CONC,
   NTLD,
   TRTG,
   legend_location = "top")
```


