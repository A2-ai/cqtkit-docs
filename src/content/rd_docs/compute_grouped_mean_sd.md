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
| `data` | A data frame containing C-QT analysis dataset |
| `dv_col` | An unquoted column name for dependent variable |
| `ntime_col` | An unquoted column name for the Time group |
| `dose_col` | An unquoted column name for dose group |
| `group_col` | An unquoted column of optional grouping column |
| `reference_dose` | Reference dose value for comparison calculations |
| `conf_int` | Numeric confidence interval level (default: 0.9) |

## Returns

a dataframe of the dv averaged over the grouped time and dose

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 data_proc <- dplyr::mutate(data_proc, DOSEF = as.factor(DOSEF))
 
 compute_grouped_mean_sd(
   data_proc, deltaQTCF, NTLD, DOSE, reference_dose = 0
 )
```


