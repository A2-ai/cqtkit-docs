## Description

Simulates a dataset used to fit the model.

## Usage

```r
compute_dataset_simulation(
  data,
  fit,
  xdata_col,
  sim_num = 0
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe conatining QTc dataset |
| `fit` | an lme fit model |
| `xdata_col` | an unqoted column name for xdata |
| `sim_num` | an optional simulation number |

## Returns

a dataframe of simulation results

## Examples

```r
data <- preprocess(data)
 fit <- nlme::lme(
   fixed = deltaQTCF ~ 1 + CONC,
   random = ~ 1 | ID,
   data = data
 )
 
 compute_dataset_simulation(data, fit, CONC)
```


