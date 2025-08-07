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
| `data` | A data frame containing C-QT analysis dataset |
| `trt_col` | An unquoted column name for treatment group |
| `id_col` | An unquoted column name for subject ID |
| `group_col` | An unquoted column name for additional grouping variable |
| `protocol_number` | A string of protocol number |
| `title` | A string for table title |
| `study_status` | A string for study status |
| `grouping_col_name` | A string for naming grouping column (default: "Dose Regimen") |
| `n_sub_col_name` | A string for n_sub column (default: "N") |
| `...` | Optional additional args to gt::tab_options |

## Returns

a gt table

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 tabulate_study_summary(data_proc, TRTG, ID,
 protocol_number = "A2AI201",
 title = "C-QT Analysis Study",
 study_status = "Completed")
```


