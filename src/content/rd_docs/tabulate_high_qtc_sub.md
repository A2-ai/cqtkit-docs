## Description

Tabulates number of high QTc/deltaQTc observations.

## Usage

```r
tabulate_high_qtc_sub(
  data,
  qtc_col,
  deltaqtc_col,
  group_col = NULL,
  group_label = NULL,
  title = NULL,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `qtc_col` | An unquoted column name for QTc data |
| `deltaqtc_col` | An unquoted column name for deltaQTC data |
| `group_col` | An optional unquoted column name of grouping column |
| `group_label` | An optional label to use for group column |
| `title` | Optional string to give the table a title, wrapped in gt::md() |
| `...` | Optional additional args to gt::tab_options |

## Returns

a gt table

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 tabulate_high_qtc_sub(data_proc, QTCF, deltaQTCF)
```


