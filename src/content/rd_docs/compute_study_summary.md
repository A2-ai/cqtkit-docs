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
| `data` | cqt-dataset |
| `trt_col` | column name of treatement group |
| `id_col` | column name of ID |
| `group_col` | optional additional grouping column |

## Returns

a tibble of number of subjects in trt_col (or trt_col + group_col) along with total id_col

## Examples

```r
data_proc <- preprocess(data)
 
 compute_study_summary(data_proc, TRTG, ID)
```


