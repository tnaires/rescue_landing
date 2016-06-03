var Cell = function(_rowIndex, _columnIndex, _width, _height) {
  this.rowIndex = function() {
    return _rowIndex;
  };

  this.columnIndex = function() {
    return _columnIndex;
  };

  this.width = function() {
    return _width;
  }

  this.height = function() {
    return _height;
  }
}
