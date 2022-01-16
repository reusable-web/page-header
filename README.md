[![view on npm](https://badgen.net/npm/v/@reusable-web/page-header)](https://www.npmjs.org/package/@reusable-web/page-header)
[![npm module downloads](https://badgen.net/npm/dt/@reusable-web/page-header)](https://www.npmjs.org/package/@reusable-web/page-header)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/reusable-web/page-header)](https://github.com/reusable-web/page-header/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/reusable-web/page-header)](https://github.com/reusable-web/page-header/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/reusable-web/page-header.svg?branch=master)](https://travis-ci.org/reusable-web/page-header)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# @reusable-web/page-header

Standard page navigation.

```html
<head>
  <script type="module" src="./node_modules/@reusable-web/page-header/index.mjs"></script>
  <style>
    page-header {
      --page-header-logo-image: url('your-logo.png');
      --page-header-logo-height: 3em; /* height and width default to 2em */
      --page-header-logo-width: 3em;
      --page-header-logo-gutter: 0.5em;
      --page-header-title-font: 1.5em sans-serif;
    }
  </style>
</head>

<page-header data-logo-url="/">
  <a href="/" slot="title">Header title</a>
  <a href="/" slot="nav">Nav slot 1</a>
  <a href="/" slot="nav">Nav slot 2</a>
  <a href="/" slot="nav">Nav slot 3</a>
</page-header>
```

* * *

&copy; 2021-22 Lloyd Brookes \<75pound@gmail.com\>.
