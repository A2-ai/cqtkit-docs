## Description

plots the observed decile-decile scatter plot of XDATA vs YDATA with linear regression.

## Usage

```r
eda_quantiles_plot(
  data,
  xdata_col,
  ydata_col,
  trt_col = NULL,
  conf_int = 0.9,
  error_bars = "CI",
  ylims = NULL,
  xlabel = NULL,
  ylabel = NULL,
  legend = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc dataset |
| `xdata_col` | an unquoted column name of x data |
| `ydata_col` | an unquoted column name of y data |
| `trt_col` | an unquoted column name of treatment column to stratify the data by |
| `conf_int` | a fractional value to set confidence interval, default = 0.9 |
| `error_bars` | a string for setting which errorbars are shown, CI, SE, SD |
| `ylims` | optional - vector of lower and upper y limits |
| `xlabel` | string for xlabel on plot |
| `ylabel` | string for ylabel on plot |
| `legend` | string for legend label if treatment_col is supplied. |

## Returns

a plot

## Examples

```r
data <- preprocess(data)
 
 eda_quantiles_plot(
   data,
   RR,
   QTCF,
   ylims = c(300, 500),
   xlabel = "RR (ms)",
   ylabel = "QTcF (ms)",
   trt_col = TRTG,
  legend = "Treatment Group",
 ) +
   ggplot2::theme(legend.position = "top")
```


