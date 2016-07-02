var Grid = function(_matrix) {
  this.rows = function() {
    return _matrix.length;
  };

  this.columns = function() {
    return _matrix[0].length;
  };

  this.drawLines = function(context) {
    var
      canvas = context.canvas,
      rowIncrement = canvas.height / this.rows(),
      columnIncrement = canvas.width / this.columns();

    context.beginPath();

    for (var i = 0; i < canvas.height; i += rowIncrement) {
      context.moveTo(0, i);
      context.lineTo(canvas.width, i);
    }

    for (var i = 0; i < canvas.width; i += columnIncrement) {
      context.moveTo(i, 0);
      context.lineTo(i, canvas.height);
    }

    context.stroke();
  };

  this.render = function(context, renderMap, fillColor, backgroundColor) {
    var
      canvas = context.canvas,
      rowHeight = canvas.height / this.rows(),
      columnWidth = canvas.width / this.columns();

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = fillColor;

    for (var i = 0; i < _matrix.length; i++) {
      var row = _matrix[i];

      for (var j = 0; j < row.length; j++) {
        var
          cell = new Cell(i, j, columnWidth, rowHeight),
          renderFunction = renderMap[row.charAt(j)];

        if (renderFunction) {
          renderFunction(context, cell);
        }
      }
    }
  };

  this.count = function(character) {
    var result = 0;

    for (var i = 0; i < _matrix.length; i++) {
      for (var j = 0; j < _matrix[i].length; j++) {
        if (_matrix[i][j] === character) {
          result++;
        }
      }
    }

    return result;
  };
};
