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
| `fit` | An nlme::lme model object from model fitting |
| `trt_col_name` | A string of column name of trt used in model fitting |
| `tafd_col_name` | A string of column name of tafd used in model fitting |
| `id_col_name` | A string of column name of id used in model fitting for random effects |
| `conf_int` | Numeric confidence interval level (default: 0.9) |
| `decimals` | Number of decimals to format table to, default is 2 |
| `show_standard_error` | Boolean that displays standard error of fixed effects estimates in table |
| `scientific` | Boolean for converting numbers to scientific notation if less than decimals |
| `title` | Optional string for adding tab_header. It will be wrapped in gt::md() |
| `...` | Optional additional arguments for gt::tab_options |

## Returns

a gt table

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 fit <- fit_prespecified_model(
   data_proc,
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


