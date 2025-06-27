## Description

Computes Baseline Mean QTCP

## Usage

```r
compute_qtcpblm(
  data
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | dataframe of input data |

## Returns

a dataframe with deltaQTCPBL column

## Examples

```r
compute_qtcpblm(compute_qtcp(data))
```


