var Screen = function(w, h) {
  var canvas, context, objects = [];

  this.width = function() {
    return w;
  };

  this.height = function() {
    return h;
  };

  this.init = function() {
    canvas = document.getElementById('gameCanvas');
    canvas.width = this.width();
    canvas.height = this.height();

    context = canvas.getContext('2d');
  };

  this.add = function(object) {
    objects.push(object);
  };

  this.draw = function() {
    for (var i = 0; i < objects.length; i++) {
      objects[i].draw(context);
    };
  };
};
