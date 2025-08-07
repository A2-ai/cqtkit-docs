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
| `data` | A data frame containing C-QT analysis dataset |
| `xdata_col` | An unquoted column name for independent variable measurements |
| `ydata_col` | An unquoted column name for dependent variable measurements |
| `conf_int` | Numeric confidence interval level (default: 0.9) |

## Returns

the fitted parameters of a lm of y ~ x

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 compute_lm_fit_df(data_proc, RR, QT)
```


