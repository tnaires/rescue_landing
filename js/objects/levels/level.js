var Level = function() {
  var
    GRID = { ROWS: 16, COLUMNS: 24 },

    grid = new Grid(GRID.ROWS, GRID.COLUMNS);

  this.draw = function(context) {
    grid.drawLines(context);
  };
};
