## Keyword

datasets

## Description

A synthetic data set created by simulating a 2 compartment model
 with mrgsolve and adding in RR, QT, and other needed data for
 testing QTctoolkit

## Usage

```r
data
```

## Format

data_qt 
 
 A data frame with 390 rows and 12 columns:
 
 ID Uniuqe subject identifier 
 NTLD Nominal time since last dose (h) 
 CONC Drug concentration (ng/mL) 
 TRTG Treatment Group (Drug or Placebo) 
 DOSE numeric value of dose (mg) 
 DOSEF Factor value of dose (mg) 
 RRBL Baseline RR (ms) 
 HRBL Baseline HR (bpm) 
 QTBL Baseline QT (ms) 
 RR RR after dose (ms) 
 HR HR after dose (bpm) 
 QT QT after dose (ms)

## Source

created in scripts/test_data_creation.qmd


