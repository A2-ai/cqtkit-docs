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
| `primary_data` | dataframe of primary data plotted |
| `secondary_data` | dataframe containing data you'd like to add to plot |
| `reference_threshold` | reference threshold values |
| `p` | a ggplot2 object to add data to |
| `y_data` | string of column name in secondary data to use for plotting |
| `group` | groupping column |
| `scale` | multiplicative scaling factor |
| `shift` | additive shifting factor |
| `sec_ylabel` | secondary y axis label |
| `ylabel` | primary y axis label |

## Returns

a ggplot2 object with additional data


