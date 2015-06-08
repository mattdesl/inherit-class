module.exports = inherits

function inherits (ctor, superCtor) {
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: true,
      writable: true,
      configurable: true
    }
  })
}
