## Description

Performs a visual predictive check and plots the results

## Usage

```r
gof_vpc_plot(
  data,
  fit,
  xdata_col,
  dv_col,
  conf_int = 0.9,
  nruns = 500,
  nbins = 10,
  type = 2,
  style = list(
)
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe containing the QTc data |
| `fit` | the model fit object |
| `xdata_col` | an unquoted column name for independent variable |
| `dv_col` | an unquoted column name for dependent variable |
| `conf_int` | a fractional numeric for confidence interval (quantiles of 5/95th quantiles), default = 0.9 |
| `nruns` | integer number of simulations to run |
| `nbins` | integer number of bins to break independent variable into - OR - a user specified vector for non-uniform binning |
| `type` | integer for type parameter of stats::quantile |
| `style` | a named list of any argument that can be passed to style_plot |

## Returns

a plot of the VPC results

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
 
 gof_vpc_plot(data_proc, fit, CONC, deltaQTCF, nruns = 2)
```


