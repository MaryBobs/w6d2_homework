const Room = function(area) {
  this.area = area;
  this.painted = false;
};

Room.prototype.paintRoom = function () {
  if (this.painted === false) {
    this.painted = true;
  }
};

module.exports = Room
