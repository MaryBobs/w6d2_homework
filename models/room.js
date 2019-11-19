const Room = function(area, painted) {
  this.area = area;
  this.painted = painted;
};

Room.prototype.paintRoom = function () {
  if (this.painted === false) {
    this.painted = true;
  };
};

module.exports = Room
