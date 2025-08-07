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
| `data` | A data frame containing C-QT analysis dataset |
| `ntime_col` | An unquoted column name for nominal time data |
| `dose_col` | An unquoted column name for dose data |
| `ecg_param_col` | An unquoted column name for QTc measurements |
| `delta_ecg_param_col` | An unquoted column name for deltaQTc measurements |
| `ecg_param_name` | A string of the ecg parameter being summarized, e.g. QTc or HR |
| `unit` | A string of the unit for ecg_parameter |
| `group_col` | An unquoted column name for additional grouping column |
| `reference_dose` | A reference dose value for comparison calculations |
| `ecg_param_conf_int` | Confidence interval for QTc summary stats default 95% |
| `delta_ecg_param_conf_int` | Confidence interval for dQTc summary stats default 90% |
| `decimals` | Number of decimals to fmt the table to default is 2, N column is 0 |
| `row_group_label` | Optional label for the dose/dose + group column |
| `title` | Optional title for the table, it will be wrapped in gt::md() |
| `...` | Optional arguments for gt::tab_options |

## Returns

a gt table of the QTc/deltaQTc/delta delta QTc summary

## Examples

```r
data_proc <- cqtkit_data_verapamil %>% preprocess()
 tabulate_ecg_param_summary(
  data_proc,
  NTLD,
  DOSEF,
  QTCF,
  deltaQTCF,
  "QTc",
  "ms",
  reference_dose = "0 mg")
```


