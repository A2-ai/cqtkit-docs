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
| `data` | QTc dataset |
| `qt_col` | unquoted column name of QT(c) data |
| `rr_col` | unquoted column name of RR data |
| `id_col` | unquoted column name of ID data |
| `method` | method for fitting (ML or REML) |
| `remove_rr_iiv` | boolean for removing IIV on slope |

## Returns

nlme::lme model

## Examples

```r
qt_mod <- fit_qtc_linear_model(bl, QT, RR, ID)
 qtcb_mod <- fit_qtc_linear_model(bl, QTCB, RR, ID)
 qtcf_mod <- fit_qtc_linear_model(bl, QTCF, RR, ID)
```


