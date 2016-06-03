var Level = function(_levelMatrix) {
  var
    RENDER_MAP = {
      ' ': function(context, cell) {

      },
      'E': function(context, cell) {

      },
      'W': function(context, cell) {
        context.fillRect(
          cell.columnIndex() * cell.width(),
          cell.rowIndex() * cell.height(),
          cell.width(),
          cell.height());
      },
      'H': function(context, cell) {
        var
          x = cell.columnIndex() * cell.width() + ((cell.width() - Hostage.SIZE) / 2),
          y = cell.rowIndex() * cell.height() + (cell.height() - Hostage.SIZE - 1),
          hostage = new Hostage(new Position(x, y));

        hostage.render(context);
      }
    },

    height, width,
    grid = new Grid(_levelMatrix),

    _checkCollision = function(position) {
      if (height && width) {
        var
          cellX = Math.floor(position.x() / (width / grid.columns())),
          cellY = Math.floor(position.y() / (height / grid.rows()));

        return _levelMatrix[cellY][cellX];
      }

      return '';
    };

  this.draw = function(context) {
    height = context.canvas.height;
    width = context.canvas.width;
    grid.render(context, RENDER_MAP);
  };

  this.wallsCollideWith = function(position) {
    return _checkCollision(position) === 'W';
  };

  this.exitReached = function(position) {
    return _checkCollision(position) === 'E';
  };

  this.hostageCount = function() {
    return grid.count('H');
  };
};

Level.ONE = new Level([
  'WEEEEEEWWWWWWWWWWWWW',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W                  W',
  'W         H        W',
  'WWWWWWWWWWWWWWWWWWWW'
]);
