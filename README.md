# inherit-class

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

Like [util.inherits](https://www.npmjs.com/package/inherits) but without any cruft. Aimed at ES5 (IE 10+), does not pollute classes with `super_`, and uses the same code path in Node and the browser.

## Example

```js
var inherits = require('inherit-class')

function MyClass() {
  BaseClass.call(this)
}

inherits(MyClass, BaseClass)
```

## Install

```sh
npm install inherit-class --save
```

## Usage

[![NPM](https://nodei.co/npm/inherit-class.png)](https://www.npmjs.com/package/inherit-class)

#### `inherits(class, superClass)`

Overrides the prototype of `class` so that it inherits from `superClass`. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/inherit-class/blob/master/LICENSE.md) for details.
