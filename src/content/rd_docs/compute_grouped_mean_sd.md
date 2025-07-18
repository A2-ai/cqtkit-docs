## Description

computes a the mean and standard deviation of the dependent variable data
 in DV_col grouped by time and dose.

## Usage

```r
compute_grouped_mean_sd(
  data,
  dv_col,
  ntime_col,
  dose_col,
  group_col = NULL,
  reference_dose = NULL,
  conf_int = 0.95
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe containing QT dataset |
| `dv_col` | an unquoted column name of dependent variable |
| `ntime_col` | an unquoted column name of the Time group |
| `dose_col` | an unquoted column name dose group |
| `group_col` | an unquoted column of optional grouping column |
| `reference_dose` | an optional DOSE of reference measurements |
| `conf_int` | confidence interval default 0.95 |

## Returns

a dataframe of the dv averaged over the grouped time and dose

## Examples

```r
data <- preprocess(data)
 data <- dplyr::mutate(data, DOSEF = as.factor(DOSEF))
 
 compute_grouped_mean_sd(
   data, deltaQTCF, NTLD, DOSE, reference_dose = 0
 )
```


