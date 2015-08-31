# React &lt;Codepen&gt;

> A react component to embed pens from [codepen.io](http://codepen.io)


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save react-codepen`


## Usage

```javascript
var React   = require('react');
var Codepen = require('react-codepen');

var Component = React.createClass({
  render: function () {
    return (
      <Codepen user="jasonbellamy" hash="XmWNEY"></Codepen>
    );
  }
});
```


## Options


Property | Type     | Argument     | Values                   | Default   | Description
---------|----------|--------------|--------------------------|-----------|------------
user     | `string` | `<required>` |                          | `null`    | [codepen.io](http://codepen.io) username.
hash     | `string` | `<required>` |                          | `null`    | the hash id of the pen to display.
height   | `string` | `<optional>` | `px, %`                  | `250px`   | the height of the pen.
width    | `string` | `<optional>` | `px, %`                  | `100%`    | the width of the pen.
tab      | `string` | `<optional>` | `css, html, js, result`  | `result`  | the default tab that should be displayed.
theme    | `string` | `<optional>` |                          | `default` | the theme the pen should use.


## Developing

[react-codepen](https://github.com/jasonbellamy/react-codepen) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
