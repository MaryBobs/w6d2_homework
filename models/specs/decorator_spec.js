const assert = require('assert');
const Decorator = require('..//decorator.js');

describe('Decorator', function () {
  let decorater;
  beforeEach( function () {
    decorator = new Decorator()
  });
  it('should start with an empty paint stock', function () {
    actual = decorator.paint_stock;
    assert.deepStrictEqual(actual, [])
  })
})
