## Description

Creates a dataframe summarizing number of subjects in each trtreatment group

## Usage

```r
compute_study_summary(
  data,
  trt_col,
  id_col,
  group_col = NULL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `trt_col` | Column name of treatment group |
| `id_col` | Column name of ID |
| `group_col` | Optional additional grouping column |

## Returns

a tibble of number of subjects in trt_col (or trt_col + group_col) along with total id_col

## Examples

```r
data_proc <- preprocess(cqtkit_data_verapamil)
 
 compute_study_summary(data_proc, TRTG, ID)
```


