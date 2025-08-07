## Description

Compute contrast observations for prediction plots

## Usage

```r
compute_contrast_observations(
  data,
  conc_col,
  dv_col,
  id_col = NULL,
  ntime_col = NULL,
  trt_col = NULL,
  treatment_predictors,
  control_predictors = NULL,
  contrast_method = c(
  "matched",
  "group"
)
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `conc_col` | An unquoted column name for drug concentration measurements |
| `dv_col` | An unquoted column name for dQTC measurements |
| `id_col` | An unquoted column name for subject ID, used when control predictors is provided to compute delta delta dv |
| `ntime_col` | An unquoted column name for Nominal time data, used when control predictors is provided to compute delta delta dv |
| `trt_col` | An unquoted column name for Treatment group data, used when control predictors is provided to compute delta delta dv |
| `treatment_predictors` | A list for predictions with model. Should contain a value for each predictor in the model. |
| `control_predictors` | An optional list for contrast predictions |
| `contrast_method` | A string specifying contrast method: "matched" for individual ID+time matching (crossover studies), "group" for group-wise subtraction (parallel studies) |

## Returns

a tibble with columns: group, conc, dv

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 # Simple case: no control group
 obs_data <- compute_contrast_observations(
   data_proc,
   CONC,
   deltaQTCF,
   treatment_predictors = list(TRTG = "Verapamil HCL")
 )
 obs_data
 
 # Matched contrast (crossover study)
 contrast_data <- compute_contrast_observations(
   data_proc,
   CONC,
   deltaQTCF,
   ID,
   NTLD,
   TRTG,
   treatment_predictors = list(TRTG = "Verapamil HCL"),
   control_predictors = list(TRTG = "Placebo"),
   contrast_method = "matched"
 )
 contrast_data
```


