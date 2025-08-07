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
| `data` | A data frame containing C-QT analysis dataset |
| `ntime_col` | An unquoted column name for Nominal time since last dose (h) |
| `deltaqtc_col` | An unquoted column name for dQTC measurements (ms) |
| `conc_col` | An unquoted column name for CONC measurements (units) |
| `dosef_col` | An unquoted column name for doses as factor |
| `group_col` | An unquoted column name for additional grouping variable. |

## Returns

list with compute_potential_hysteresis results for each dose.

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 data_proc <- dplyr::mutate(data_proc, DOSEF = as.factor(DOSEF))
 
 compute_hysteresis_labeller(
   data_proc,
   NTLD,
   deltaQTCF,
   CONC,
   DOSEF)
```


