const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function () {
  let paint
  beforeEach( function () {
    paint = new Paint(5);
  });
  it('should have a number of litres of paint', function() {
    actual = paint.litres;
    assert.strictEqual(actual, 5)
  });
  it('should be able to check if empty', function() {
    paint.empty();
    actual = paint.isItEmpty();
    assert.strictEqual(actual, true)
  });
  it('should be able to check if not empty', function () {
    actual = paint.isItEmpty();
    assert.strictEqual(actual, false)
  })
  it('should be able to empty itself of paint', function() {
    paint.empty();
    actual = paint.litres;
    assert.strictEqual(actual,0)
  })
})
