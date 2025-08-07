## Description

Generates pk parameters Cmax and Tmax for exporsure predictions.

## Usage

```r
compute_pk_parameters(
  data,
  id_col,
  dose_col,
  conc_col,
  ntime_col,
  group_col = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `id_col` | An unquoted column name for subject ID |
| `dose_col` | An unquoted column name for dose measurements |
| `conc_col` | An unquoted column name for drug concentration measurements |
| `ntime_col` | An unquoted column name for nominal times |
| `group_col` | An unquoted column name for additional grouping variable |

## Returns

a dataframe of pk parameters

## Examples

```r
compute_pk_parameters(
   preprocess(cqtkit_data_verapamil) %>% dplyr::filter(DOSE != 0),
   ID,
   DOSE,
   CONC,
   NTLD)
```


