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
};
