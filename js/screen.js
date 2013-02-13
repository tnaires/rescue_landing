var Screen = function(w, h) {
  var canvas, objects = [];

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
  };

  this.add = function(object) {
    objects.push(object);
  };

  this.draw = function() {
    var context = canvas.getContext('2d');

    for (var i = 0; i < objects.length; i++) {
      objects[i].draw(context);
    };
  };
};
