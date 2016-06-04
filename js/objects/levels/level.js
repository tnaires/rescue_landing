var Level = function(_levelMatrix) {
  var
    hostages = [],

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
        var hostage = new Hostage(cell);

        hostages.push(hostage);
        hostage.render(context);
      }
    },

    height, width,
    grid = new Grid(_levelMatrix),

    _cellX = function(x) {
      return Math.floor(x / (width / grid.columns()));
    },

    _cellY = function(y) {
      return Math.floor(y / (height / grid.rows()));
    },

    _checkCollision = function(position) {
      if (height && width) {
        var
          cellX = _cellX(position.x()),
          cellY = _cellY(position.y());

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

  this.hostageAtPosition = function(position) {
    var result;

    if (_checkCollision(position) === 'H') {
      for (var i = 0; i < hostages.length; i++) {
        var hostage = hostages[i];

        if (_cellX(position.x()) == hostage.cell().columnIndex() &&
            _cellY(position.y()) == hostage.cell().rowIndex()) {
          result = hostage;
          break;
        }
      }
    }

    return result;
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
