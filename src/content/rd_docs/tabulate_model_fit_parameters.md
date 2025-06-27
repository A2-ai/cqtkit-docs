## Description

Generates table of model parameter esitmates and statistics

## Usage

```r
tabulate_model_fit_parameters(
  fit,
  trt_col_name = "TRTG",
  tafd_col_name = "TAFD",
  id_col_name = "ID",
  conf_int = 0.95,
  decimals = 2,
  show_standard_error = FALSE,
  scientific = TRUE,
  title = NULL,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `fit` | fitted model |
| `trt_col_name` | string of column name of trt used in model fitting |
| `tafd_col_name` | string of column name of tafd used in model fitting |
| `id_col_name` | string of column name of id used in model fitting for random effects |
| `conf_int` | confidence interval, default = 0.95 |
| `decimals` | number of decimals to format table to, default is 2 |
| `show_standard_error` | boolean, displays standard error of fixed effects estimates in table |
| `scientific` | boolean for converting numbers to scientific notation if less than decimals |
| `title` | optional string for adding tab_header. It will be wrapped in gt::md() |
| `...` | optional additional arguments for gt::tab_options |

## Returns

a gt table

## Examples

```r
data <- preprocess(data)
 fit <- fit_prespecified_model(
   data,
   deltaQTCF,
   ID,
   CONC,
   deltaQTCFBL,
   TRTG,
   TAFD,
   "REML",
   TRUE
 )
 
 tabulate_model_fit_parameters(fit, "TRTG", "TAFD", "ID")
```


