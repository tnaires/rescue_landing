var Level = function(_levelMatrix, _fuel, _celestialBody) {
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
        hostage.render(context, _celestialBody.backgroundColor());
      }
    },

    height, width,
    grid = new Grid(_levelMatrix),
    nextLevel,

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

  this.clear = function(context) {
    for (var i = 0; i < hostages.length; i++) {
      hostages[i].clear(context);
    }

    var canvas = context.canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.draw = function(context) {
    hostages = [];

    height = context.canvas.height;
    width = context.canvas.width;
    grid.render(context, RENDER_MAP, _celestialBody.landColor(), _celestialBody.backgroundColor());

    context.font = '15px "Lucida Console", Monaco, monospace';
    context.fillStyle = '#FFFFFF';
    context.fillText(_celestialBody.info(), 110, 470);
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

  this.reset = function() {
    for (var i = 0; i < hostages.length; i++) {
      hostages[i].reset();
    }
  };

  this.setNextLevel = function(_nextLevel) {
    nextLevel = _nextLevel;
    return _nextLevel;
  };

  this.nextLevel = function() {
    return nextLevel;
  };

  this.playable = function() {
    return true;
  };

  this.fuel = function() {
    return _fuel;
  };

  this.celestialBody = function() {
    return _celestialBody;
  };
};
