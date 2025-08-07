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
| `data` | A dataframe from compute_grouped_mean_sd |
| `p` | A ggplot object to add error bars to |
| `reference_dose` | Reference dose value for comparison calculations |
| `error_bars` | Type of errorbars to use (ci, se, sd, null) |
| `conf_int` | Numeric confidence interval level (default: 0.9) |

## Returns

ggplot2 with errorbars


