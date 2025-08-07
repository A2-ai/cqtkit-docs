## Description

Detects the pressence of hysteresis

## Usage

```r
compute_potential_hysteresis(
  data,
  ntime_col,
  deltaqtc_col,
  conc_col,
  group_col
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `ntime_col` | An unquoted column name for nominal timepoints |
| `deltaqtc_col` | An unquoted column name for dQTC measurements |
| `conc_col` | An unquoted column name for concentration measurements |
| `group_col` | An unquoted column name for grouping column - usually DOSEF |

## Returns

a bool of TRUE if hysteresis detected else FALSE

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 data_proc <- dplyr::filter(data_proc, DOSE == 120)
 
 compute_potential_hysteresis(
   data_proc,
   NTLD,
   deltaQTCF,
   CONC,
   DOSEF)
```


