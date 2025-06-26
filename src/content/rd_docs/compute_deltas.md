## Description

Computes delta variables RR, QTCF, HR, etc

## Usage

```r
compute_deltas(
  data
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | input dataset for QT analysis |

## Returns

dataframe with deltaPARAM columns included

## Examples

```r
compute_deltas(compute_qtcf(compute_qtcb(data)))
```


