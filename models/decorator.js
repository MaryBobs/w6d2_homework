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

module.exports = Decorator
