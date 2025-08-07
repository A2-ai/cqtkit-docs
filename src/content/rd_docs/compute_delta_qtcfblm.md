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
| `data` | A data frame containing C-QT analysis dataset |
| `id_col` | An unquoted column name for subject ID |
| `qtcfbl_col` | An unquoted column name for baseline QTCB measurements, default is QTCBBL |
| `deduplicate` | Boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

a dataframe with deltaQTCFBL column

## Examples

```r
compute_delta_qtcfblm(compute_qtcb_qtcf(cqtkit_data_verapamil))
```


