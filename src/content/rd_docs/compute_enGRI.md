## Description

Exposure Normalized GRI computation

## Usage

```r
compute_enGRI(
  data,
  conc_gm_col,
  ddqtc_col
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc dataset |
| `conc_gm_col` | CONC geometric mean column name |
| `ddqtc_col` | delta delta QTc column name |

## Returns

a numeric (ms) of enGRI score

## Examples

```r
compute_enGRI(preprocess(data), CONC, deltaQTCF)
```


