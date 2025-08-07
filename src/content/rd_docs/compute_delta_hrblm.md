## Description

computes delta HR BL Mean

## Usage

```r
compute_delta_hrblm(
  data,
  id_col = ID,
  hrbl_col = HRBL,
  deduplicate = TRUE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `id_col` | An unquoted column name for subject ID |
| `hrbl_col` | An unquoted column name for baseline HR measurements, default is HRBL |
| `deduplicate` | Boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

data frame with deltaHRBL

## Examples

```r
compute_delta_hrblm(cqtkit_data_verapamil)
```


