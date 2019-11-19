const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')

describe('Decorator', function () {
  let decorator;
  beforeEach( function () {
    decorator = new Decorator()
  });
  it('should start with an empty paint stock', function () {
    actual = decorator.paintStock;
    assert.deepStrictEqual(actual, [])
  });
  it('should be able to add a can of paint', function () {
    paint = new Paint(5);
    decorator.addPaintCan(paint)
    actual = decorator.paintStock.length
    assert.deepStrictEqual(actual, 1)
  })
})
