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
| `id_col` | An unquoted column name for subject ID |
| `deduplicate` | Boolean, whether baseline values are duplicated over rows. If true duplicates will be removed from average |

## Returns

dataframe with deltas computed from BL

## Examples

```r
preprocess(cqtkit_data_verapamil)
```


