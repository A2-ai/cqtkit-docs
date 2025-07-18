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
| `data` | a dataframe of QTc dataset |
| `id_col` | an unquoted column name of ID |
| `dose_col` | an unquoted column name of Dose |
| `conc_col` | an unquoted column name of Concentration measurements |
| `ntime_col` | an unquoted column name nominal times |
| `group_col` | an unquoted column name of additional grouping column |

## Returns

a dataframe of pk parameters

## Examples

```r
compute_pk_parameters(
   preprocess(data) %>% dplyr::filter(DOSE != 0),
   ID,
   DOSE,
   CONC,
   NTLD)
```


