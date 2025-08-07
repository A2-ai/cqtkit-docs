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
| `data` | A data frame containing C-QT analysis dataset |
| `id_col` | An unquoted column name for subject ID |
| `dose_col` | An unquoted column name for dose measurements |
| `conc_col` | An unquoted column name for drug concentration measurements |
| `ntime_col` | An unquoted column name for nominal time since dose |
| `group_col` | An unquoted column name for additional grouping column |
| `decimals` | Number of decimals to format the table to (default: 2, format for N is 0 decimals) |
| `title` | Optional title for the table, it will be wrapped in gt::md() |
| `...` | Optional additional arguments to gt::tab_options |

## Returns

a gt table

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 tabulate_pk_parameters(data_proc %>% dplyr::filter(DOSE != 0), ID, DOSE, CONC, NTLD)
```


