## Description

Plots model predictions with therapeutic and supra therapeutic Cmax

## Usage

```r
predict_with_exposure_plot(
  data,
  fit,
  conc_col,
  treatment_predictors,
  control_predictors = NULL,
  reference_threshold = c(
  10
),
  tpx_cmax = NULL,
  stpx_cmax = NULL,
  conf_int = 0.9,
  xlabel = "Concentration (
  ng/mL
)",
  ylabel = NULL,
  title = ""
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc dataset |
| `fit` | the lme model to make predictions with |
| `conc_col` | an unquoted column name of drug concentration measurements |
| `treatment_predictors` | list of a values for contrast. CONC will update |
| `control_predictors` | list of b values for contrast |
| `reference_threshold` | optional vector of numbers to add as horizontal dashed lines |
| `tpx_cmax` | Optional - numeric therapeutic dose Cmax |
| `stpx_cmax` | Optional - numeric supra therapeutic Cmax |
| `conf_int` | confidence interval fraction, default = 0.9 |
| `xlabel` | xlabel for plot |
| `ylabel` | ylabel for plot |
| `title` | a string of plot title. |

## Returns

a plot

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
 pk_df <- compute_pk_parameters(
   data %>% dplyr::filter(DOSE != 0), ID, DOSEF, CONC, NTLD)
 
 predict_with_exposure_plot(
   data,
   fit,
   CONC,
   treatment_predictors = list(
     CONC = 0,
     deltaQTCFBL = 0,
     TRTG = "Verapamil HCL",
     TAFD = "2 HR"
   ),
   control_predictors = list(
     CONC = 0,
     deltaQTCFBL = 0,
     TRTG = "Placebo",
     TAFD = "2 HR"
   ),
   tpx_cmax = pk_df[[1, "Cmax_gm"]], # Dose = 120
 )
```


