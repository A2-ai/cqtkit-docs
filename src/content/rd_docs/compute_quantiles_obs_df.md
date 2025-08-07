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
| `data` | A data frame containing C-QT analysis dataset |
| `xdata_col` | An unquoted column name for concentration measurements |
| `ydata_col` | An unquoted column name for deltaQTc measurements |
| `conf_int` | Numeric confidence interval level (default: 0.9) |
| `nbins` | Integer number of bins to break independent variable into - OR - a user specified vector for non-uniform binning |
| `type` | Algorithm for quantile. Default (2), is SAS quantile algorithm |

## Returns

a tibble of conc, deltaQTC quantiles

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 compute_quantiles_obs_df(data_proc, CONC, deltaQTCF)
```


