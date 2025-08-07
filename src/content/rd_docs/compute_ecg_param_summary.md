## Description

Generates a tibble of summary of QTc, dQTc and ddQTc over time stratified by dose

## Usage

```r
compute_ecg_param_summary(
  data,
  ntime_col,
  dose_col,
  ecg_param_col,
  deltaecg_param_col,
  group_col = NULL,
  reference_dose = NULL,
  conf_int = 0.95
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `ntime_col` | An unquoted column name for nominal time data |
| `dose_col` | An unquoted column name for dose data |
| `ecg_param_col` | An unquoted column name for QTc measurements |
| `deltaecg_param_col` | An unquoted column name for deltaQTc measurements |
| `group_col` | An unquoted column name for additional grouping column |
| `reference_dose` | Reference dose value for comparison calculations |
| `conf_int` | Numeric confidence interval level (default: 0.9) |

## Returns

a tibble of QTc/deltaQTc/delta delta QTc summary over dose and time.

## Examples

```r
data_proc <- cqtkit_data_verapamil %>% preprocess()
 
 compute_ecg_param_summary(data_proc, NTLD, DOSEF, QTCF, deltaQTCF)
```


