## Description

Creates a style list for eda graphing functions

## Usage

```r
set_style(
  style = NULL,
  title = NULL,
  xlabel = NULL,
  ylabel = NULL,
  xlims = NULL,
  ylims = NULL,
  colors = NULL,
  labels = NULL,
  shapes = NULL,
  legend = NULL,
  shape_legend = NULL,
  color_order = NULL,
  shape_order = NULL,
  linetype_order = NULL,
  legend.position = NULL,
  logx = NULL,
  logy = NULL,
  fill_alpha = NULL,
  fill_legend = NULL,
  fill_order = NULL,
  caption_hjust = NULL,
  legend_nrow = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `style` | an optional style list to update |
| `title` | a string for a plot title |
| `xlabel` | a string for x-axis label |
| `ylabel` | a string for y-axis label |
| `xlims` | a tuple of numbers specifying limits for x-axis |
| `ylims` | a tuple of numbers specifying limits for y-axis |
| `colors` | a named character vector for setting colors |
| `labels` | a named character vector for setting legend labels |
| `shapes` | a named character vector for setting geom_point shapes |
| `legend` | a string for setting color legend title |
| `shape_legend` | a string for setting shape legend title |
| `color_order` | a numeric for setting color legend order |
| `shape_order` | a numeric for setting shape legend order |
| `linetype_order` | a numeric for setting linetype legend order |
| `legend.position` | a string for legend position |
| `logx` | a boolean for setting x-axis to log scale |
| `logy` | a boolean for setting y-axis to log scale |
| `fill_alpha` | a numeric for controlling alpha of fill colors |
| `fill_legend` | a string to replace fill legend title |
| `fill_order` | a numeric for setting fill legend order |
| `caption_hjust` | a string or numeric for caption horizontal justification ("left"/0, "center"/0.5, "right"/1) |
| `legend_nrow` | a numeric for number of rows in legend |

## Returns

a named list for using with style_plot

## Examples

```r
data_proc <- data |> preprocess()
 style = set_style(
   colors = c(
     "0 mg Placebo" = "grey"
   ),
   labels = c(
     "Reference -10" = NA,
     "Reference 10" = "+/- 10 ms dQTcF",
     "0 mg Placebo" = "Placebo",
     "120 mg Verapamil" = "Verapamil"
   ),
   legend = "Treatment"
 )
 style
```


