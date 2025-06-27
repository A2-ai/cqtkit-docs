## Description

Hysteresis loop plot to visually inspect hysteresis

## Usage

```r
eda_hysteresis_loop_plot(
  data,
  ntime_col,
  deltaqtc_col,
  conc_col,
  dosef_col,
  group_col = NULL,
  reference_dose = NULL,
  xlabel = "Mean Plasma Concentration (
  ng/mL
)",
  ylabel = bquote(
  "Mean " ~ Delta ~ "QTc (
  ms
)"
),
  title = "",
  show_hysteresis_warning = TRUE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QTc dataset |
| `ntime_col` | an unquoted column name of nominal time points |
| `deltaqtc_col` | an unquoted column name of dQTC measurements at the time points in NTLD |
| `conc_col` | an unquoted column name of drug concentrations at each NTLD |
| `dosef_col` | an unquoted column name of DOSE factors. |
| `group_col` | an unquoted column name of additional grouping column |
| `reference_dose` | Optional - DOSE of reference (i.e. placebo, DOSE == 0) measurements |
| `xlabel` | a string for x label |
| `ylabel` | a string for y label |
| `title` | a string for plot title |
| `show_hysteresis_warning` | boolean, if TRUE adds Hysteresis Detected to facet wrap label for groups with hysteresis detected |

## Returns

a plot

## Examples

```r
data <- preprocess(data)
 data <- dplyr::mutate(data, DOSEF = factor(DOSEF))
 
 eda_hysteresis_loop_plot(data, NTLD, deltaQTCF, CONC, DOSEF, reference_dose = 0)
```


