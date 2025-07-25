## Description

Wrapper for calling compute_dataset_simulation nruns time and computing summary statsitics of the simulations

## Usage

```r
compute_summary_statistics_of_simulations(
  data,
  fit,
  xdata_col,
  conf_int,
  nruns,
  nbins,
  type = 2
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe conatining QTc dataset |
| `fit` | an lme fit model |
| `xdata_col` | an unqoted column name for xdata |
| `conf_int` | a fractional numeric for confidence interval (quantiles of 5/95th quantiles), default = 0.9 |
| `nruns` | integer number of simulations to run |
| `nbins` | integer number of bins to break independent variable into - OR - a user specified vector for non-uniform binning |
| `type` | algorithm for quantile. Default (2), is SAS quantile algorithm |

## Returns

a tibble of summary statistics of nruns worth of dataset simulations for a VPC.

## Examples

```r
data_proc <- preprocess(data)
 
 fit <- nlme::lme(
   fixed = deltaQTCF ~ 1 + CONC,
   random = ~ 1 | ID,
   data = data_proc,
   method = "REML",
   na.action = "na.exclude"
 )
 
 compute_summary_statistics_of_simulations(
   data = data_proc,
   fit = fit,
   xdata_col = CONC,
   conf_int = 0.9,
   nruns = 50,
   nbins = 10,
   type = 2)
```


