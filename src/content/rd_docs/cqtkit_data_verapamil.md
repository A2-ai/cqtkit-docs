## Keyword

datasets

## Description

C-QT analysis dataset for verapamil with minimal QTc effect (~8 ms prolongation)

## Usage

```r
cqtkit_data_verapamil
```

## Format

cqtkit_data_verapamil

A tibble: 643 × 15:

deltaHRBL Difference between baseline HR and mean baseline HR across subjects (ms)

deltaQTCBBL Difference between baseline QTCB and mean baseline QTCB across subjects (ms)

deltaQTCFBL Difference between baseline QTCF and mean baseline QTCF across subjects (ms)

| Column | Description |
|--------|-------------|
| `ID` | Uniuqe subject identifier |
| `TRTG` | Treatment Group (Drug or Placebo) |
| `DOSE` | numeric value of dose |
| `DOSEU` | Units of DOSE |
| `DOSEF` | Factor value of dose |
| `NTLD` | Nominal time since last dose (h) |
| `CONC` | Drug concentration |
| `CONCU` | Drug concentration unit |
| `RR` | RR after dose (ms) |
| `RRBL` | Baseline RR beore dose (ms) |
| `HR` | HR after dose (bpm) |
| `HRBL` | Baseline HR beore dose (ms) |
| `HRBLM` | Mean baseline HR across subjects (ms) |
| `QT` | QT after dose (ms) |
| `QTBL` | Baseline QT before dose (ms) |
| `QTCB` | Bazett's corrected QT after dose (ms) |
| `QTCBBL` | Baseline Bazett's corrected QT before dose (ms) |
| `QTCBBLM` | Mean baseline QTCB across subjects (ms) |
| `QTCF` | Fridericia's corrected QT after dose (ms) |
| `QTCFBL` | Baseline Fridericia's corrected QT before dose(ms) |
| `QTCFBLM` | Mean baseline QTCF across subjects (ms) |

## Source

Derived from Johannesen et. al. (https://ascpt.onlinelibrary.wiley.com/doi/10.1038/clpt.2014.155)


