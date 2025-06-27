## Description

Pre-processes data

## Usage

```r
preprocess(
  data,
  use_BL = TRUE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | Data frame containing QTc data |
| `use_BL` | a bool for using BL QT/RR data for QTcP |

## Returns

dataframe with deltas computed from BL

## Examples

```r
preprocess(data)
```


