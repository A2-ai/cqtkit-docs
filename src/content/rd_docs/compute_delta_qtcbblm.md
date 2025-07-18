## Description

Computes Baseline Mean QTCB

## Usage

```r
compute_delta_qtcbblm(
  data,
  id_col = ID,
  qtcbbl_col = QTCBBL,
  deduplicate = TRUE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | dataframe of input data |
| `id_col` | an unquoted column name of ID data |
| `qtcbbl_col` | an unquoted column name of baseline QTCB measurements, default is QTCBBL |
| `deduplicate` | boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

a dataframe with deltaQTCBBL column

## Examples

```r
compute_delta_qtcbblm(compute_qtcb_qtcf(data))
```


