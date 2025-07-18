## Description

plots scatter plot with with linear and loess regressions. Can be used to check for linearity.

## Usage

```r
eda_scatter_with_regressions(
  data,
  ydata_col,
  xdata_col,
  trt_col = NULL,
  reference_threshold = NULL,
  loess_line = TRUE,
  linear_line = TRUE,
  span = 0.99,
  conf_int = 0.9,
  style = list(
)
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QT dataset |
| `ydata_col` | an unquoted column name of dependent variable measurements |
| `xdata_col` | an unquoted column name of independent variable measurements |
| `trt_col` | Optional - an unquoted column name of treatment group |
| `reference_threshold` | optional vector of numbers to add as horizontal dashed lines |
| `loess_line` | a bool to add LOESS regression line |
| `linear_line` | a bool to add a linear regression line |
| `span` | a fractional value for LOESS span parameter in geom_smooth if LOESS is used, default 0.99 |
| `conf_int` | a fractional numeric for setting confidence interval, default = 9 |
| `style` | a named list of any argument that can be passed to style_plot. Shapes are mapped to treatment groups and can be controlled via the shapes parameter in style |

## Returns

a plot

## Examples

```r
data <- preprocess(data)
 
 eda_scatter_with_regressions(
   data,
   deltaQTCF,
   CONC,
   TRTG,
   reference_threshold = 10)
```


