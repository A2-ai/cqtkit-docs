## Description

Computes R-squared and Adjusted R-squared of loess regression
 compared to linear regression. Used for determining linearity
 of C-QT data

## Usage

```r
compute_loess_linear_r_squared(
  data,
  deltaqtc_col,
  conc_col,
  span = 0.99
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | a dataframe of QT dataset |
| `deltaqtc_col` | an unquoted column name of dQTCF measurements |
| `conc_col` | an unquoted column name of drug concentration measurements |
| `span` | a fractional value for LOESS span parameter in geom_smooth if LOESS is used, default 0.99 |

## Returns

a tibble of R_squared and adjusted R_squared

## Examples

```r
compute_loess_linear_r_squared(data %>% preprocess(), deltaQTCF, CONC)
```


