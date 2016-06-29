var Info = function(drawCallback) {
  var
    nextLevel;

  this.clear = function(context) {
    var canvas = context.canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.draw = function(context) {
    drawCallback(context);
  };

  this.setNextLevel = function(_nextLevel) {
    nextLevel = _nextLevel;
  };

  this.nextLevel = function() {
    return nextLevel;
  };

  this.playable = function() {
    return false;
  };
};
