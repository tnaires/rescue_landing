var Shift = function(_speed) {
  this.speed = function() {
    return _speed;
  };
};

Shift.LEFT = new Shift(new Speed(-2, 0));
Shift.RIGHT = new Shift(new Speed(2, 0));
Shift.NONE = new Shift(new Speed(0, 0));
