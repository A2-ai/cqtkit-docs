## Description

Plots predictions of the model with observed values

## Usage

```r
predict_with_observations_plot(
  data,
  fit,
  conc_col,
  dv_col,
  id_col = NULL,
  ntime_col = NULL,
  trt_col = NULL,
  treatment_predictors,
  control_predictors = NULL,
  reference_threshold = c(
  10
),
  conf_int = 0.9,
  contrast_method = c(
  "matched",
  "group"
),
  style = list(
)
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `fit` | An nlme::lme model object from model fitting |
| `conc_col` | An unquoted column name for drug concentration measurements |
| `dv_col` | An unquoted column name for dependent variable measurements |
| `id_col` | An unquoted column name for subject ID |
| `ntime_col` | An unquoted column name for nominal time since dose |
| `trt_col` | An unquoted column name for treatment group |
| `treatment_predictors` | A list for predictions with model. Should contain a value for each predictor in the model. |
| `control_predictors` | An optional list for contrast predictions |
| `reference_threshold` | Optional vector of numbers to add as horizontal dashed lines |
| `conf_int` | Numeric confidence interval level (default: 0.9) |
| `contrast_method` | A string specifying contrast method when using control_predictors: "matched" for individual ID+time matching (crossover studies), "group" for group-wise subtraction (parallel studies) |
| `style` | A named list of arguments passed to style_plot() |

## Returns

a plot

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
 predict_with_observations_plot(
   data_proc,
   fit,
   CONC,
   deltaQTCF,
   treatment_predictors = list(
     CONC = 0,
     TRTG = "Verapamil HCL",
     TAFD = "2 HR",
     deltaQTCFBL = 0
   ),
   conf_int = 0.9
 )
```


