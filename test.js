var inherits = require('./')
var test = require('tape')

test('util.inherits without the cruft', function (t) {
  function BaseClass () {
    this.blah = 'foo'
    this.second = 'one'
  }

  BaseClass.prototype.foobar = function () {
    return 'foobar'
  }

  function MyClass () {
    BaseClass.call(this)
    this.second = 'two'
  }

  inherits(MyClass, BaseClass)

  t.equal(new BaseClass().second, 'one')
  t.equal(new MyClass().second, 'two')
  t.equal(new MyClass().blah, 'foo')
  t.equal(new MyClass().foobar(), 'foobar')
  t.end()
})
