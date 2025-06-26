## Description

Creates a gt table of study summary for number of subjects in each grouping

## Usage

```r
tabulate_study_summary(
  data,
  trt_col,
  id_col,
  group_col = NULL,
  protocol_number,
  title,
  study_status,
  grouping_col_name = "Dose Regimen",
  n_sub_col_name = "N",
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | c-qt dataset |
| `trt_col` | treatment column name |
| `id_col` | subject id column name |
| `group_col` | optional additional grouping column |
| `protocol_number` | string of protocol number |
| `title` | string for table title |
| `study_status` | string for study status |
| `grouping_col_name` | string for naming grouping column, default = "Dose Regimen" |
| `n_sub_col_name` | string for n_sub column, default = "N" |
| `...` | optional additional args to gt::tab_options |

## Returns

a gt table

## Examples

```r
data_proc <- preprocess(data)
 
 tabulate_study_summary(data_proc, TRTG, ID,
 protocol_number = "A2AI201",
 title = "C-QT Analysis Study",
 study_status = "Completed")
```


