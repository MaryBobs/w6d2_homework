const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js')
const Room = require('../room.js')

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
  });
  it('should be able to calculate total litres of paint in stock', function () {
    paint = new Paint(5);
    decorator.addPaintCan(paint);
    actual = decorator.calculatePaintLitres();
    assert.strictEqual(actual, 5);
  });
  it('should be able to calculate if can paint room', function () {
    room = new Room(10);
    paint = new Paint(5);
    decorator.addPaintCan(paint);
    paint = new Paint(5);
    decorator.addPaintCan(paint);
    actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, true)
  });
  it('should be able to calculate if cannot paint room', function () {
    room = new Room(15);
    paint = new Paint(5);
    decorator.addPaintCan(paint);
    paint = new Paint(5);
    decorator.addPaintCan(paint);
    actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, false)
  });
  it('should be able to paint room if enough paint', function () {
    room = new Room(10);
    paint = new Paint(5);
    decorator.addPaintCan(paint);
    paint = new Paint(5);
    decorator.addPaintCan(paint);
    decorator.canPaintRoom(room);
    actual = decorator.paintTheRoom(room)
    assert.strictEqual(actual, true)
  })
})
