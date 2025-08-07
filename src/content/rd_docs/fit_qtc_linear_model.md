## Description

Fits QT(c) data to linear mixed effects model with fixed effects of intercept and
 RR slope, with random effects on intercept and slope.

## Usage

```r
fit_qtc_linear_model(
  data,
  qt_col,
  rr_col,
  id_col,
  method = "REML",
  remove_rr_iiv = FALSE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `qt_col` | An unquoted column name for QT measurements |
| `rr_col` | An unquoted column name for RR measurements |
| `id_col` | An unquoted column name for subject ID |
| `method` | Method for nlme::lme fitting (ML or REML) |
| `remove_rr_iiv` | Boolean for removing IIV on slope |

## Returns

nlme::lme model

## Examples

```r
bl <- compute_qtcb_qtcf(cqtkit_data_bl_verapamil, qtbl_col = NULL, rrbl_col = NULL)
 
 qt_mod <- fit_qtc_linear_model(bl, QT, RR, ID)
 qtcb_mod <- fit_qtc_linear_model(bl, QTCB, RR, ID)
 qtcf_mod <- fit_qtc_linear_model(bl, QTCF, RR, ID)
```


