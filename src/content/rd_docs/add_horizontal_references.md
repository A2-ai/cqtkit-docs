## Description

adds horizontal reference lines to plot

## Usage

```r
add_horizontal_references(
  p,
  reference_threshold
)
```

## Arguments

| Name | Description |
|------|-------------|
| `p` | A ggplot object |
| `reference_threshold` | Numeric/vector of numerics for horizontal lines |

## Returns

a ggplot object with refence horizontal lines

## Examples

```r
data_proc <- cqtkit_data_verapamil |> preprocess()
 eda_mean_dv_over_time(
   data_proc,
   deltaQTCF,
   NTLD,
   DOSEF,
   group_col = TRTG,
   secondary_data_col = CONC,
   reference_dose = "0 mg"
 ) |>
   add_horizontal_references(
     reference_threshold = c(-10, 10)
   )
```


