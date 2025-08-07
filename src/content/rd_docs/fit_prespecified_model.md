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
| `data` | A data frame containing C-QT analysis dataset |
| `dv_col` | An unquoted column name for dependent variable measurements |
| `id_col` | An unquoted column name for ID data |
| `conc_col` | An unquoted column name for drug concentration measurements |
| `delta_bl_col` | An unquoted column name for delta_bl values, e.g. deltaQTCFBL, deltaHRBL |
| `trt_col` | An unquoted column name for treatment group |
| `tafd_col` | An unquoted column name for time measurements |
| `method` | Method for nlme::lme fitting (ML or REML) |
| `remove_conc_iiv` | Boolean for removing IIV on concentration slope parameter |

## Returns

an nlme::lme model fit to the data

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 fit_prespecified_model(data_proc, deltaQTCF, ID, CONC, deltaQTCFBL, TRTG, TAFD)
```


