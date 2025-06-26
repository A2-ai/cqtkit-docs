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
| `data` | a dataframe containing QTc dataset |
| `ntime_col` | an unquoted column name for nominal time data |
| `dose_col` | an unquoted column name for dose data |
| `ecg_param_col` | an unquoted column name for QTc measurements |
| `deltaecg_param_col` | an unquoted column name for deltaQTc measurements |
| `group_col` | an unquoted column name for additional grouping column |
| `reference_dose` | an optional argument for specifying reference dose for delta delta QTc computation |
| `conf_int` | an optional argument for setting confidence interval. default 0.95 |

## Returns

a tibble of QTc/deltaQTc/delta delta QTc summary over dose and time.

## Examples

```r
data <- data %>% preprocess()
 
 compute_ecg_param_summary(data, NTLD, DOSEF, QTCF, deltaQTCF)
```


