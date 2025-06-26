## Description

Plots mean dependent variable over time

## Usage

```r
eda_mean_dv_over_time(
  data,
  dv_col,
  ntime_col,
  dosef_col,
  secondary_data_col = NULL,
  group_col = NULL,
  reference_dose = NULL,
  reference_threshold = NULL,
  conf_int = 0.9,
  scale_factor = NULL,
  error_bars = "CI",
  title = "",
  ylabel = bquote(
  "Mean " ~ Delta ~ "QTc (
  ms
)"
),
  sec_ylabel = "Concentration (
  ng/mL
)",
  logx = FALSE,
  legend = ""
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | dataframe containing QTc dataset |
| `dv_col` | an unquoted column name of dependent variable |
| `ntime_col` | an unquoted column name of nominal Time grouping |
| `dosef_col` | an unquoted column name of Dose grouping |
| `secondary_data_col` | optional unquoted column name to overlay on secondary y-axis |
| `group_col` | an unquoted column name of additional grouping column |
| `reference_dose` | Optional - DOSE of reference (i.e. placebo, DOSE == 0) measurements |
| `reference_threshold` | Optional - a numeric or vector of numerics to add dashed lines to plot |
| `conf_int` | fractional confidence interval, default = 0.9 |
| `scale_factor` | optional scale factor for secondary_data_col |
| `error_bars` | a string for setting which errorbars are shown, CI, SE, SD |
| `title` | a string to title the plot |
| `ylabel` | a string for ylabel default is bquote('Mean ' ~Delta~'QTc (ms)') |
| `sec_ylabel` | a string for secondary ylabel, default is Concentration (ng/mL) |
| `logx` | a bool for applying log transform to x axis |
| `legend` | a string for legend label |

## Returns

a plot

## Examples

```r
data <- preprocess(data)
 
 eda_mean_dv_over_time(
   data,
   deltaQTCF,
   NTLD,
   DOSEF,
   group_col = TRTG,
   reference_dose = "0 mg",
   reference_threshold = 10,
   ylabel = bquote('Mean '~Delta~Delta~'QTc (ms)'))
```


