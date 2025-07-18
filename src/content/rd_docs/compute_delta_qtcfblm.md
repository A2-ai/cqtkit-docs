## Description

Computes Baseline Mean QTCF

## Usage

```r
compute_delta_qtcfblm(
  data,
  id_col = ID,
  qtcfbl_col = QTCFBL,
  deduplicate = TRUE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | dataframe of input data |
| `id_col` | an unquoted column name of ID data |
| `qtcfbl_col` | an unquoted column name of baseline QTCB measurements, default is QTCBBL |
| `deduplicate` | boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

a dataframe with deltaQTCFBL column

## Examples

```r
compute_delta_qtcfblm(compute_qtcb_qtcf(data))
```


