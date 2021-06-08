---
title: "Title/Notes"
metaTitle: "Title and notes of SWMM-JS UI."
metaDescription: "Description of the Title/Notes section of the UI."
---

# Title/Notes

## Description
Use the Title/Notes tool to add a title and/or notes to the SWMM-js project.

## UI Comparison

Comparing the desktop app with the browser app helps to ensure compatibility throughout the applications. The following table uses screenshots of each to compare and contrast the two distinct UIs.

<table style="border: 2px solid black">
  <tr>
    <td style="font-weight: bold">Desktop App UI screenshots (5.1):</td>
    <td style="font-weight: bold">Current UI screenshots:</td>
  </tr>
  <tr>
    <td><img style="width: 45vw" src="/img/TitleNotes_js.png"></img></td>
    <td><img style="width: 45vw" src="/img/TitleNotes_dt.png"></img></td>
  </tr>
  <tr>
    <td><img style="width: 45vw" src="/img/TitleNotes_01_js.png"></img></td>
    <td><img style="width: 45vw" src="/img/TitleNotes_01_dt.png"></img></td>
  </tr>
</table>

## .INP File

The .inp file is read by swmm-js to establish default values, describe the mapped elements, and fully implement the model.

The Title/Notes section is written as follows:

```text
[TITLE]
;;Project Title/Notes
Example 1
Line 2 of text.
```
This is a multi-line text description of the project. For editing/reporting uses only. Modifying this text will have no effect on the computational results of the project.

## SJX Section

The relevant SJX section is:

```javascript
SJX.Title   [line1, line2, ...]
```

## Parsing Algorithm

- Read each line of the section into new elements of SJX.title.

## Relevant Constants

None.

## Relevant Code Sections, 5.1 c

None.