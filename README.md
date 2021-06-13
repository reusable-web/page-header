[![view on npm](https://badgen.net/npm/v/@75lb/page-header)](https://www.npmjs.org/package/@75lb/page-header)
[![npm module downloads](https://badgen.net/npm/dt/@75lb/page-header)](https://www.npmjs.org/package/@75lb/page-header)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/reusable-web/page-header)](https://github.com/reusable-web/page-header/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/reusable-web/page-header)](https://github.com/reusable-web/page-header/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/reusable-web/page-header.svg?branch=master)](https://travis-ci.org/reusable-web/page-header)
[![Coverage Status](https://coveralls.io/repos/github/reusable-web/page-header/badge.svg)](https://coveralls.io/github/reusable-web/page-header)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# @75lb/page-header

Standard page navigation.

```html
<style>
  page-header {
    --page-header-logo-image: url('your-logo.png');
    --page-header-logo-height: 3em; /* height and width default to 2em */
    --page-header-logo-width: 3em;
  }
</style>

<page-header>
  <span slot="title">Header title</span>
  <a href="/" slot="nav">Nav slot 1</a>
  <a href="/" slot="nav">Nav slot 2</a>
  <a href="/" slot="nav">Nav slot 3</a>
</page-header>
```

* * *

&copy; 2021 Lloyd Brookes \<75pound@gmail.com\>.
