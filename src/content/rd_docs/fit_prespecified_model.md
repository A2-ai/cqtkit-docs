## Description

generates nlme::lme model either prespecified or without TRT and TIME.

## Usage

```r
fit_prespecified_model(
  data,
  dv_col,
  id_col,
  conc_col,
  delta_bl_col,
  trt_col = NULL,
  tafd_col = NULL,
  method = "ML",
  remove_conc_iiv = FALSE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of the QTc datset |
| `dv_col` | an unquoted column name of dependent variable data |
| `id_col` | an unquoted column name of ID data |
| `conc_col` | an unquoted column name of CONC data |
| `delta_bl_col` | an unquoted column name of delta_bl values, e.g. deltaQTCFBL, deltaHRBL |
| `trt_col` | Optional - an unquoted column name of TRT data |
| `tafd_col` | Optional - an unquoted column name of TAFD data |
| `method` | method for nlme::lme fitting |
| `remove_conc_iiv` | boolean for removing IIV on concentration slope parameter |

## Returns

an nlme::lme model fit to the data

## Examples

```r
data <- preprocess(data)
 
 fit_prespecified_model(data, deltaQTCF, ID, CONC, deltaQTCFBL, TRTG, TAFD)
```


