## Description

returns a dataframe of quantiles of concentrations and deltaQTcs

## Usage

```r
compute_quantiles_obs_df(
  data,
  xdata_col,
  ydata_col,
  conf_int = 0.9,
  nbins = 10,
  type = 2
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc Dataset |
| `xdata_col` | an unquoted column name of concentration measurements |
| `ydata_col` | an unquoted column name of deltaQTc measurements |
| `conf_int` | confidence level, default = 0.9 |
| `nbins` | integer number of bins to break independent variable into - OR - a user specified vector for non-uniform binning |
| `type` | algorithm for quantile. Default (2), is SAS quantile algorithm |

## Returns

a tibble of conc, deltaQTC quantiles

## Examples

```r
data <- preprocess(data)
 
 compute_quantiles_obs_df(data, CONC, deltaQTCF)
```


