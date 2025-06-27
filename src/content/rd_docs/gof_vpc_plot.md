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
  xlabel = "Concentration (
  ng/mL
)",
  ylabel = bquote(
  Delta ~ "QTc (
  ms
)"
),
  title = ""
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
| `xlabel` | a string for x label of plot, default is 'Concentration (ng/mL)' |
| `ylabel` | a string for y label of plot, default is bquote(Delta ~ 'QTc (ms)') |
| `title` | a string for plot title |

## Returns

a plot of the VPC results

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
 
 gof_vpc_plot(data, fit, CONC, deltaQTCF, nruns = 2)
```


