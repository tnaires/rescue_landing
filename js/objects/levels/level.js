var Level = function(_levelMatrix) {
  var
    height, width,
    grid = new Grid(_levelMatrix);

  this.draw = function(context) {
    height = context.canvas.height;
    width = context.canvas.width;
    grid.render(context);
  };

  this.wallsCollideWith = function(position) {
    if (height && width) {
      var
        cellX = Math.floor(position.x() / (width / grid.columns())),
        cellY = Math.floor(position.y() / (height / grid.rows()));

      //console.log(cellX + ' ' + cellY + ' @@ ' + _levelMatrix[cellY][cellX] + ' @@');

      return _levelMatrix[cellY][cellX] !== Grid.EMPTY_CELL;
    }

    return false;
  };
};

Level.ONE = new Level([
  '#   ################',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '#                  #',
  '####################'
]);
