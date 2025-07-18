## Description

Pre-processes data
 Computes QTcB, QTcF, deltaQTcF, deltaQTcB, deltaHR, deltaQTcB Baseline Mean,
 deltaQTcF Baseline Mean, deltaHR Baseline Mean

## Usage

```r
preprocess(
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
  qtcbbl_col = QTCBBL,
  id_col = ID,
  deduplicate = TRUE
)
```

## Arguments

| Name | Description |
|------|-------------|
| `data` | Data frame containing QTc data |
| `qt_col` | an unquoted column name of QT measurements, QT by default |
| `qtbl_col` | an unquoted column name of baseline QT measurements, QTBL by default |
| `rr_col` | an unquoted column name of RR measurements, RR by default |
| `rrbl_col` | an unquoted column name of baseline RR measurements, RRBL by default |
| `hr_col` | an unquoted column name of HR measurements, HR by default |
| `hrbl_col` | an unquoted column name of baseline HR measurements, HRBL by default |
| `qtcf_col` | an unquoted column name of QTCF measurements, QTCF by default |
| `qtcfbl_col` | an unquoted column name of baseline QTCF measurements, QTCFBL by default |
| `qtcb_col` | an unquoted column name of QTCB measurements, QTCB by default |
| `qtcbbl_col` | an unquoted column name of baseline QTCB measurements, QTCBBL by default |
| `id_col` | an unquoted column name of ID data |
| `deduplicate` | boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

dataframe with deltas computed from BL

## Examples

```r
preprocess(data)
```


