## Description

adds secondary data to a plot

## Usage

```r
add_secondary_data(
  primary_data,
  secondary_data,
  reference_threshold = NULL,
  p,
  y_data,
  group,
  scale = NULL,
  shift = NULL,
  sec_ylabel,
  ylabel
)
```

## Arguments

| Name | Description |
|------|-------------|
| `primary_data` | Dataframe of primary data plotted |
| `secondary_data` | Dataframe containing data you'd like to add to plot |
| `reference_threshold` | Reference threshold values |
| `p` | A ggplot2 object to add data to |
| `y_data` | String of column name in secondary data to use for plotting |
| `group` | Grouping column |
| `scale` | Multiplicative scaling factor |
| `shift` | Additive shifting factor |
| `sec_ylabel` | Secondary y axis label |
| `ylabel` | Primary y axis label |

## Returns

a ggplot2 object with additional data


