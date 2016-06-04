var Hostage = function(_cell) {
  var
    IMAGE_INDEX_ORDER = [0, 1, 2, 1],
    IMAGE_INDEX_CHANGE_TIME = 200,

    frame = new Rectangle(Hostage.SIZE, Hostage.SIZE),
    spriteSheet = new SpriteSheet('res/hostage.png', frame),

    currentImageIndex = IMAGE_INDEX_ORDER[0],
    rescued = false,

    position = new Position(
      _cell.columnIndex() * _cell.width() + ((_cell.width() - Hostage.SIZE) / 2),
      _cell.rowIndex() * _cell.height() + (_cell.height() - Hostage.SIZE - 1)
    ),

    _cycle = function(context) {
      context.clearRect(position.x() - 1, position.y() - 1, frame.width() + 2, frame.height() + 2);

      if (!rescued) {
        currentImageIndex = (currentImageIndex + 1) % 4;
        spriteSheet.draw(IMAGE_INDEX_ORDER[currentImageIndex], position, context);
      }
    };

  this.render = function(context) {
    setInterval(_cycle, IMAGE_INDEX_CHANGE_TIME, context);
  };

  this.cell = function() {
    return _cell;
  };

  this.rescue = function() {
    rescued = true;
  };

  this.reset = function() {
    rescued = false;
  }

  this.alreadyRescued = function() {
    return rescued;
  };
};

Hostage.SIZE = 15;
