var Level = function(w, h) {
  var grid = new Grid(32, 48);

  this.draw = function(context) {
    grid.drawLines(context);
  };
};
