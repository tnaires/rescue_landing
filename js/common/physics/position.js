var Position = function(_x, _y) {
  this.x = function() {
    return _x;
  };

  this.y = function() {
    return _y;
  };

  this.shift = function(speed) {
    _x += speed.horizontal();
    _y += speed.vertical();
  };

  this.plus = function(deltaX, deltaY) {
    return new Position(_x + deltaX, _y + deltaY);
  }
};
