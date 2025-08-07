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
| `data` | A data frame containing C-QT analysis dataset |
| `fit` | An nlme::lme model object from model fitting |
| `conc_col` | An unquoted column name for concentration measurements used to fit the model |
| `treatment_predictors` | A list of a values for contrast. conc will update |
| `control_predictors` | A list of b values for contrast |
| `doses` | A vector of doses to show prediction at |
| `cmaxes` | A vector of Cmax for each dose |
| `qtc_label` | A label for QTc column name, default QTc (ms) |
| `conc_units` | Units for concentration default ng/mL |
| `conf_int` | Numeric confidence interval level (default: 0.9) |
| `decimals` | Number of decimals to format numbers to. default is 2 |
| `scientific` | Boolean for converting to scientific notation |
| `title` | Optional string for table title. Wrapped in gt::md() |
| `...` | Optional additional args to gt::tab_options |

## Returns

a gt table of predicted dQTc/ddQTc values and their CI at tpx and or
 stpx dose/Cmax

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


