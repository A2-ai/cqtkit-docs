## Description

plots the observed decile-decile scatter plot of x-data vs y-data with linear regression.

## Usage

```r
eda_quantiles_plot(
  data,
  xdata_col,
  ydata_col,
  trt_col = NULL,
  conf_int = 0.9,
  error_bars = "CI",
  style = list(
)
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
| `style` | a named list of any argument that can be passed to style_plot |

## Returns

a plot

## Examples

```r
data <- preprocess(data)
 
 eda_quantiles_plot(
   data,
   RR,
   QTCF,
   trt_col = TRTG,
  style = set_style(
   legend = "Treatment Group",
   ylims = c(300, 500),
   xlabel = "RR (ms)",
   ylabel = "QTcF (ms)",
   legend.position = "top"
  )
 )
```


