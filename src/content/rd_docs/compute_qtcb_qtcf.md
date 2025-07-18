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
| `data` | a dataframe containing QT, RR, QTBL, RRBL |
| `qt_col` | an unquoted column name of QT measurements, QT by default |
| `qtbl_col` | an unquoted column name of baseline QT measurements, QTBL by default |
| `rr_col` | an unquoted column name of RR measurements, RR by default |
| `rrbl_col` | an unquoted column name of baseline RR measurements, RRBL by default |

## Returns

data with QTCF, QTCB, QTCFBL, and QTCBBL columns

## Examples

```r
compute_qtcb_qtcf(data)
```


