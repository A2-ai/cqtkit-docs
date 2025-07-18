## Description

Plots QQ plot of WRES and IWRES

## Usage

```r
gof_qq_plots(
  data,
  fit,
  dv_col,
  conc_col,
  ntime_col,
  trt_col = NULL,
  legend_location = c(
  "top",
  "bottom",
  "left",
  "right",
  "none"
),
  style = list(
)
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
| `legend_location` | location of legend ggpubr::ggarrange argument |
| `style` | a named list of any argument that can be passed to style_plot |

## Returns

a plot

## Examples

```r
data_proc <- preprocess(data)
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
 
 gof_qq_plots(data_proc, fit, deltaQTCF, CONC, NTLD, TRTG, legend_location = "top")
```


