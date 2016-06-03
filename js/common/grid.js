var Grid = function(_matrix) {
  var
    FILL_COLOR = '#000000';

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

  this.render = function(context, renderMap) {
    var
      canvas = context.canvas,
      rowHeight = canvas.height / this.rows(),
      columnWidth = canvas.width / this.columns();

    context.fillStyle = FILL_COLOR;

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
};
