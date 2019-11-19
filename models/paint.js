const Paint = function(litres) {
  this.litres = litres
};

Paint.prototype.empty = function () {
  if (this.litres > 0) {
    this.litres = 0
  };
}

Paint.prototype.isItEmpty = function () {
  if (this.litres === 0) {
    return true }
    else {
      return false
    };
}




module.exports = Paint
