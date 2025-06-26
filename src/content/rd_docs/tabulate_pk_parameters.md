## Description

Converts pk_parameters df into gt table for printing

## Usage

```r
tabulate_pk_parameters(
  data,
  id_col,
  dose_col,
  conc_col,
  ntime_col,
  group_col = NULL,
  decimals = 2,
  title = NULL,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc dataset |
| `id_col` | an unquoted column name of ID |
| `dose_col` | an unquoted column name of Dose |
| `conc_col` | an unquoted column name of Concentration measurments |
| `ntime_col` | an unquoted column name of nominal times |
| `group_col` | an unquoted column name of additional grouping column |
| `decimals` | number of decimals to fmt the table to default is 2, format for N is 0 decimals |
| `title` | optional title for the table, it will be wrapped in gt::md() |
| `...` | optional additional arguments to gt::tab_options |

## Returns

a gt table

## Examples

```r
data_proc <- preprocess(data)
 
 tabulate_pk_parameters(data_proc %>% dplyr::filter(DOSE != 0), ID, DOSE, CONC, NTLD)
```


