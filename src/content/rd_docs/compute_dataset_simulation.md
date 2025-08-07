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
| `data` | A data frame containing C-QT analysis dataset |
| `fit` | An nlme::lme model object from model fitting |
| `xdata_col` | An unquoted column name for xdata |
| `sim_num` | An optional simulation number |

## Returns

a dataframe of simulation results

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 fit <- nlme::lme(
   fixed = deltaQTCF ~ 1 + CONC,
   random = ~ 1 | ID,
   data = data_proc
 )
 
 compute_dataset_simulation(data_proc, fit, CONC)
```


