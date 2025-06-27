## Description

Gets labeller for hysteresis_loop_plot. Should most likely not be used by user

## Usage

```r
compute_hysteresis_labeller(
  data,
  ntime_col,
  deltaqtc_col,
  conc_col,
  dosef_col,
  group_col = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc data |
| `ntime_col` | an unquoted column name of Nominal time since last dose (h) |
| `deltaqtc_col` | an unquoted column name of dQTC measurements (ms) |
| `conc_col` | an unquoted column name of CONC measurements (units) |
| `dosef_col` | an unquoted column name of doses as factor |
| `group_col` | an unquoted column name of additional grouping column. |

## Returns

list with compute_potential_hysteresis results for each dose.

## Examples

```r
data <- preprocess(data)
 data <- dplyr::mutate(data, DOSEF = as.factor(DOSEF))
 
 compute_hysteresis_labeller(
   data,
   NTLD,
   deltaQTCF,
   CONC,
   DOSEF)
```


