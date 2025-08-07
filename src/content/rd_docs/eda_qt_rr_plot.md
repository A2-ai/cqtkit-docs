## Description

Plot QT against RR

## Usage

```r
eda_qt_rr_plot(
  data,
  rr_col,
  qt_col,
  id_col = NULL,
  trt_col = NULL,
  conf_int = 0.9,
  model_type = c(
  "lm",
  "lme"
),
  show_model_results = TRUE,
  method = "REML",
  remove_rr_iiv = FALSE,
  style = list(
)
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `rr_col` | An unquoted column name for RR measurements |
| `qt_col` | An unquoted column name for QT measurements |
| `id_col` | An unquoted column name for subject ID |
| `trt_col` | An unquoted column name for treatment group |
| `conf_int` | Numeric confidence interval level (default: 0.9) |
| `model_type` | Lm or lme, which model to fit for showing on plot |
| `show_model_results` | A bool for showing regression slope on plot. |
| `method` | Method for nlme::lme fitting (ML or REML) |
| `remove_rr_iiv` | A boolean for removing IIV on RR slope |
| `style` | A named list of arguments passed to style_plot() |

## Returns

a plot of the input QT against RR

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 eda_qt_rr_plot(data_proc, RR, QT, ID, model_type = "lme")
```


