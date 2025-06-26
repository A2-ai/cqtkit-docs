## Description

Tablulates exposure predictions at therapeutic and supratherapuetic Cmax.

## Usage

```r
tabulate_exposure_predictions(
  data,
  fit,
  conc_col,
  treatment_predictors,
  control_predictors = NULL,
  doses,
  cmaxes,
  qtc_label = "QTc (
  ms
)",
  conc_units = "ng/mL",
  conf_int = 0.9,
  decimals = 2,
  scientific = TRUE,
  title = NULL,
  ...
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc dataset |
| `fit` | the lme model to use for predictions |
| `conc_col` | an unquoted column name of concentration measurements used to fit the model |
| `treatment_predictors` | list of a values for contrast. conc will update |
| `control_predictors` | list of b values for contrast |
| `doses` | vector of Doses to show prediction at |
| `cmaxes` | vector of Cmax for each dose |
| `qtc_label` | label for QTc column name, default QTc (ms) |
| `conc_units` | Units for concentration default ng/mL |
| `conf_int` | confidence interval for predictions. Default 90% |
| `decimals` | number of decimals to format numbers to. default is 2 |
| `scientific` | boolean for converting to scientific notation |
| `title` | optional string for table title. Wrapped in gt::md() |
| `...` | optional additional args to gt::tab_options |

## Returns

a gt table of predicted dQTc/ddQTc values and their CI at tpx and or
 stpx dose/Cmax

## Examples

```r
data_proc <- preprocess(data)
 
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
 pk_df <- compute_pk_parameters(
   data_proc %>% dplyr::filter(DOSE != 0),
   ID,
   DOSEF,
   CONC,
   NTLD
 )
 
 tabulate_exposure_predictions(
   data_proc,
   fit,
   CONC,
   list(
     CONC = 10,
     deltaQTCFBL = 0,
     TRTG = "Verapamil HCL",
     TAFD = "2 HR"),
   list(
     CONC = 0,
     deltaQTCFBL = 0,
     TRTG = "Placebo",
     TAFD = "2 HR"),
   doses <- c(120),
   cmaxes <- c(pk_df[[1, "Cmax_gm"]])
 )
```


