# Nice Number JS

Nicely format HTML input number fields with Nice Number JS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

Nice Number JS is a lightweight JavaScript library that enhances the appearance and user experience of HTML input number fields. It provides a simple and customizable way to format input numbers to make them visually appealing and user-friendly.

![preview](./assets/images/screenshot.png)

## Features

- No dependencies.
- Format HTML input number fields with button control.
- Apply custom styles to the input number elements.

## Installation

You can install Nice Number JS via npm:

```bash
npm install nice-number-js
```

## Usage

1. Import `nice-number-js` to your javascript code.

```javascript
import NiceNumber from "nice-number-js";
```

2. Include the style to your project css

```css
@import "./node_modules/nice-number-js/dist/css/nice-number.min.css";
```

3. Initialize `nice-number-js` to your HTML input number. You can also provide custom css class name with `className` option.

```javascript
const inputNumber = document.getElementById("myInput");

new NiceNumber(inputNumber, {
  className: `custom-css-class-name`,
});
```
