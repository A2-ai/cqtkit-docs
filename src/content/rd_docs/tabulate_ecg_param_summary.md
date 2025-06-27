## Description

Generates a gt table of summary of QTc, dQTc and ddQTc over time stratified by dose

## Usage

```r
tabulate_ecg_param_summary(
  data,
  ntime_col,
  dose_col,
  ecg_param_col,
  delta_ecg_param_col,
  ecg_param_name,
  unit = "",
  group_col = NULL,
  reference_dose = NULL,
  ecg_param_conf_int = 0.95,
  delta_ecg_param_conf_int = 0.9,
  decimals = 2,
  row_group_label = NULL,
  title = NULL,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe containing QTc dataset |
| `ntime_col` | an unquoted column name for nominal time data |
| `dose_col` | an unquoted column name for dose data |
| `ecg_param_col` | an unquoted column name for QTc measurements |
| `delta_ecg_param_col` | an unquoted column name for deltaQTc measurements |
| `ecg_param_name` | a string of the ecg parameter being summarized, e.g. QTc or HR |
| `unit` | a string of the unit for ecg_parameter |
| `group_col` | an unquoted column name of additional grouping column |
| `reference_dose` | an optional argument for specifying reference dose for delta delta QTc computation |
| `ecg_param_conf_int` | confidence interval for QTc summary stats default 95% |
| `delta_ecg_param_conf_int` | confidence interval for dQTc summary stats default 90% |
| `decimals` | number of decimals to fmt the table to default is 2, N column is 0 |
| `row_group_label` | optional label for the dose/dose + group column |
| `title` | optional title for the table, it will be wrapped in gt::md() |
| `...` | optional arguments for gt::tab_options |

## Returns

a gt table of the QTc/deltaQTc/delta delta QTc summary

## Examples

```r
data <- data %>% preprocess()
 tabulate_ecg_param_summary(data, NTLD, DOSEF, QTCF, deltaQTCF, "QTc", "ms")
```


