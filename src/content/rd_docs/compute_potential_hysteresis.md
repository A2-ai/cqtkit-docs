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
| `data` | a dataframe of QTc dataset |
| `ntime_col` | an unquoted column name for nominal timepoints |
| `deltaqtc_col` | an unquoted column name of dQTC measurements |
| `conc_col` | an unquoted column name of concentration measurements |
| `group_col` | an unquoted column name of grouping column - usually DOSEF |

## Returns

a bool of TRUE if hysteresis detected else FALSE

## Examples

```r
data <- preprocess(data)
 data <- dplyr::filter(data, DOSEF == 250)
 
 compute_potential_hysteresis(
   data,
   NTLD,
   deltaQTCF,
   CONC,
   DOSEF)
```


