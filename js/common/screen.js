var Screen = function(_width, _height) {
  var canvas, context, objects = [];

  this.width = function() {
    return _width;
  };

  this.height = function() {
    return _height;
  };

  this.init = function(canvasId) {
    canvas = document.getElementById(canvasId);
    canvas.width = this.width();
    canvas.height = this.height();

    context = canvas.getContext('2d');
  };

  this.add = function(object) {
    objects.push(object);
  };

  this.clear = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.draw = function() {
    for (var i = 0; i < objects.length; i++) {
      objects[i].draw(context);
    };
  };
};
