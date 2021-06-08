---
title: "General"
metaTitle: "General options for SWMM-JS UI."
metaDescription: "Description of general options for the UI."
---

# Options->General

Provides general modeling options.

## UI Comparison

Comparing the desktop app with the browser app helps to ensure compatibility throughout the applications. The following table uses screenshots of each to compare and contrast the two distinct UIs.

<table style="border: 2px solid black">
  <tr>
    <td style="font-weight: bold">Desktop App UI screenshots (5.1):</td>
    <td style="font-weight: bold">Current UI screenshots:</td>
  </tr>
  <tr>
    <td><img style="width: 45vw" src="/img/Options_General_js.png"></img></td>
    <td><img style="width: 45vw" src="/img/Options_General_dt.png"></img></td>
  </tr>
  <tr>
    <td><img style="width: 45vw" src="/img/Options_General_01_js.png"></img></td>
    <td><img style="width: 45vw" src="/img/Options_General_01_dt.png"></img></td>
  </tr>
</table>

## .INP File

The .inp file is read by swmm-js to establish default values, describe the mapped elements, and fully implement the model.

The Options->General section is written as follows:

```text
[OPTIONS]
;;Option                Value
IGNORE_RAINFALL         YES/NO/NOLINE(NO)
IGNORE_RDII             YES/NO/NOLINE(NO)
IGNORE_SNOWMELT         YES/NO/NOLINE(NO)
IGNORE_GROUNDWATER      YES/NO/NOLINE(NO)
IGNORE_ROUTING          YES/NO/NOLINE(NO)
IGNORE_QUALITY          YES/NO/NOLINE(NO)

ALLOW_PONDING           YES/NO/NOLINE(YES)
CONTROLS                YES/NO/NOLINE(YES)
INPUT                   YES/NO/NOLINE(YES)
MIN_SLOPE               float

INFILTRATION            HORTON/MODIFIED_HORTON/GREEN_AMPT/CURVE_NUMBER
FLOW_ROUTING            STEADY/KINWAVE/DYNWAVE
```

## SJX Section

The relevant SJX sections are:

```javascript   
SJX.OPTIONS.IGNORE_RAINFALL     NoYesWords
SJX.OPTIONS.IGNORE_RDII         NoYesWords
SJX.OPTIONS.IGNORE_SNOWMELT     NoYesWords
SJX.OPTIONS.IGNORE_GROUNDWATER  NoYesWords
SJX.OPTIONS.IGNORE_ROUTING      NoYesWords
SJX.OPTIONS.IGNORE_QUALITY      NoYesWords

SJX.OPTIONS.ALLOW_PONDING       NoYesWords
SJX.OPTIONS.CONTROLS            NoYesWords
SJX.OPTIONS.INPUT               NoYesWords
SJX.OPTIONS.MIN_SLOPE           float

SJX.OPTIONS.INFILTRATION        InfilModelWords
SJX.OPTIONS.FLOW_ROUTING        RouteModelWords
```