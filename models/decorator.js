const Decorator = function() {
  this.paintStock = []
}

Decorator.prototype.addPaintCan = function (paint) {
  this.paintStock.push(paint);
};



module.exports = Decorator
