## Description

Computes the number of subjects with QTc > 450, 500 as well as deltaQTc > 30, 60

## Usage

```r
compute_high_qtc_sub(
  data,
  qtc_col,
  deltaqtc_col,
  group_col = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe with QTc dataset |
| `qtc_col` | an unquoted column name containing QTc data |
| `deltaqtc_col` | an unquoted column name containing deltaQTc data |
| `group_col` | an optional column name for grouping data |

## Returns

a tibble containing the number of subjects with high QTc values

## Examples

```r
data_proc <- preprocess(data)
 
 compute_high_qtc_sub(data_proc, QTCF, deltaQTCF)
```


