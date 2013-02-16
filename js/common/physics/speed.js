var Speed = function(hor, ver) {
  this.horizontal = function() {
    return hor;
  };

  this.vertical = function() {
    return ver;
  };

  this.accelerate = function(acceleration) {
    hor += acceleration.horizontal();
    ver += acceleration.vertical();
  };
};
