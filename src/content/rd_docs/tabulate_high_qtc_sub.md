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
| `data` | a dataframe of QTc dataset |
| `qtc_col` | an unquoted column name of QTc data |
| `deltaqtc_col` | an unquoted column name of deltaQTC data |
| `group_col` | an optional unquoted column name of grouping column |
| `group_label` | an optional label to use for group column |
| `title` | optional string to give the table a title, wrapped in gt::md() |
| `...` | optional additional args to gt::tab_options |

## Returns

a gt table

## Examples

```r
data_proc <- preprocess(data)
 
 tabulate_high_qtc_sub(data_proc, QTCF, deltaQTCF)
```


