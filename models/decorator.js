const Decorator = function() {
  this.paintStock = []
}

Decorator.prototype.addPaintCan = function (paint) {
  this.paintStock.push(paint);
};

Decorator.prototype.calculatePaintLitres = function () {
  let total = 0
  for (let paint of this.paintStock) {
    total += paint.litres
  }
    return total
  };

Decorator.prototype.canPaintRoom = function (room) {
  if (this.calculatePaintLitres() >= room.area) {
    return true }
    else {
      return false
    }
}

module.exports = Decorator
