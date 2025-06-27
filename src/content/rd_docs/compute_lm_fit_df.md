## Description

Fits a linear model of input dataframe

## Usage

```r
compute_lm_fit_df(
  data,
  xdata_col,
  ydata_col,
  conf_int = 0.95
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | QTc dataset |
| `xdata_col` | an unquoted column name of x data |
| `ydata_col` | an unquoted column name of y data |
| `conf_int` | confidence interval |

## Returns

the fitted parameters of a lm of y ~ x

## Examples

```r
data <- preprocess(data)
 
 compute_lm_fit_df(data, RR, QT)
```


