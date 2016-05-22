var Grid = function(_rows, _columns) {
  this.rows = function() {
    return _rows;
  };

  this.columns = function() {
    return _columns;
  };

  this.drawLines = function(context) {
    var
      canvas = context.canvas,
      rowIncrement = canvas.height / _rows,
      columnIncrement = canvas.width / _columns;

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

  this.renderFrom = function(context, gridMatrix) {
    var
      canvas = context.canvas,
      rowHeight = canvas.height / _rows,
      columnWidth = canvas.width / _columns;

    for (var i = 0; i < gridMatrix.length; i++) {
      var row = gridMatrix[i];

      for (var j = 0; j < row.length; j++) {
        if (row.charAt(j) === '#') {
          context.fillRect(j * columnWidth, i * rowHeight, columnWidth, rowHeight);
        }
      }
    }
  };
};
