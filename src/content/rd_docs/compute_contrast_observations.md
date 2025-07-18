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
| `data` | a dataframe of QTc dataset |
| `conc_col` | an unquoted column name of drug concentration measurements |
| `dv_col` | an unquoted column name of dQTC measurements |
| `id_col` | an unquoted column name of ID data, used when control predictors is provided to compute delta delta dv |
| `ntime_col` | an unquoted column name of Nominal time data, used when control predictors is provided to compute delta delta dv |
| `trt_col` | an unquoted column name of Treatment group data, used when control predictors is provided to compute delta delta dv |
| `treatment_predictors` | a list for predictions with model. Should contain a value for each predictor in the model. |
| `control_predictors` | an optional list for contrast predictions |
| `contrast_method` | a string specifying contrast method: "matched" for individual ID+time matching (crossover studies), "group" for group-wise subtraction (parallel studies) |

## Returns

a tibble with columns: group, conc, dv

## Examples

```r
data <- preprocess(data)
 
 # Simple case: no control group
 obs_data <- compute_contrast_observations(
   data,
   CONC,
   deltaQTCF,
   treatment_predictors = list(TRTG = "Verapamil HCL")
 )
 obs_data
 
 # Matched contrast (crossover study)
 contrast_data <- compute_contrast_observations(
   data,
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


