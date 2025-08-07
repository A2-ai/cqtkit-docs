## Description

Computes delta variables RR, QTCF, HR, etc

## Usage

```r
compute_deltas(
  data,
  qt_col = QT,
  qtbl_col = QTBL,
  rr_col = RR,
  rrbl_col = RRBL,
  hr_col = HR,
  hrbl_col = HRBL,
  qtcf_col = QTCF,
  qtcfbl_col = QTCFBL,
  qtcb_col = QTCB,
  qtcbbl_col = QTCBBL
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | A data frame containing C-QT analysis dataset |
| `qt_col` | An unquoted column name for QT measurements |
| `qtbl_col` | An unquoted column name for baseline QT measurements |
| `rr_col` | An unquoted column name for RR measurements |
| `rrbl_col` | An unquoted column name for baseline RR measurements |
| `hr_col` | An unquoted column name for HR measurements, HR by default |
| `hrbl_col` | An unquoted column name for baseline HR measurements, HRBL by default |
| `qtcf_col` | An unquoted column name for QTCF measurements, QTCF by default |
| `qtcfbl_col` | An unquoted column name for baseline QTCF measurements, QTCFBL by default |
| `qtcb_col` | An unquoted column name for QTCB measurements, QTCB by default |
| `qtcbbl_col` | An unquoted column name for baseline QTCB measurements, QTCBBL by default |

## Returns

dataframe with deltaPARAM columns included

## Examples

```r
compute_deltas(compute_qtcb_qtcf(cqtkit_data_verapamil))
```


