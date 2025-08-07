## Description

Computes QTCF and QTCB from qt_col and rr_col and QTCFBL and QTCBBL from qtbl_col and rrbl_col

## Usage

```r
compute_qtcb_qtcf(
  data,
  qt_col = QT,
  qtbl_col = QTBL,
  rr_col = RR,
  rrbl_col = RRBL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing QT, RR, QTBL, RRBL |
| `qt_col` | An unquoted column name for QT measurements |
| `qtbl_col` | An unquoted column name for baseline QT measurements |
| `rr_col` | An unquoted column name for RR measurements |
| `rrbl_col` | An unquoted column name for baseline RR measurements |

## Returns

data with QTCF, QTCB, QTCFBL, and QTCBBL columns

## Examples

```r
compute_qtcb_qtcf(cqtkit_data_verapamil)
```


