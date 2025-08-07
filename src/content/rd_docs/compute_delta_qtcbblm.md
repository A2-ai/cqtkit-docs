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
| `data` | A data frame containing C-QT analysis dataset |
| `id_col` | An unquoted column name for subject ID |
| `qtcbbl_col` | An unquoted column name for baseline QTCB measurements, default is QTCBBL |
| `deduplicate` | Boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

a dataframe with deltaQTCBBL column

## Examples

```r
compute_delta_qtcbblm(compute_qtcb_qtcf(cqtkit_data_verapamil))
```


