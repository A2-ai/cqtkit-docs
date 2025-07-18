## Description

adds errorbars to a plot

## Usage

```r
add_error_bars_to_plot(
  data,
  p,
  reference_dose,
  error_bars,
  conf_int
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | dataframe from compute_grouped_mean_sd |
| `p` | ggplot object to add error bars to |
| `reference_dose` | reference dose value |
| `error_bars` | type of errorbars to use, ci, se, sd, null |
| `conf_int` | confidence interval for ci |

## Returns

ggplot2 with errorbars


