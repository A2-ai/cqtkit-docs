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
| `data` | input dataset for qtc analysis |
| `id_col` | an unquoted column name of ID data |
| `hrbl_col` | an unquoted column name of baseline HR measurements, default is HRBL |
| `deduplicate` | boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

data frame with deltaHRBL

## Examples

```r
compute_delta_hrblm(data)
```


