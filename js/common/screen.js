var Screen = function(_width, _height) {
  var
    canvas, context, objects = [],

    _eachObject = function(callback) {
      for (var i = 0; i < objects.length; i++) {
        callback(objects[i]);
      }
    };

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
    _eachObject(function(object) { object.clear(context); });
  };

  this.update = function() {
    _eachObject(function(object) { object.update(); });
  };

  this.draw = function() {
    _eachObject(function(object) { object.draw(context); });
  };
};
