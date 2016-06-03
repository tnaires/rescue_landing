var Hostage = function() {
  var
    HOSTAGE_SIZE = 15,
    IMAGE_INDEX_ORDER = [0, 1, 2, 1],
    IMAGE_INDEX_CYCLE_CHANGE = 8,

    frame = new Rectangle(HOSTAGE_SIZE, HOSTAGE_SIZE),
    spriteSheet = new SpriteSheet('res/hostage.png', frame),

    position = new Position(200, 200),

    currentImageIndex = IMAGE_INDEX_ORDER[0],
    cycleCounter = 0;

  this.clear = function(context) {
    context.clearRect(position.x() - 1, position.y() - 1, frame.width() + 2, frame.height() + 2);
  };

  this.update = function() {
    if (cycleCounter++ == IMAGE_INDEX_CYCLE_CHANGE) {
      currentImageIndex = (currentImageIndex + 1) % 4;
      cycleCounter = 0;
    }
  };

  this.draw = function(context) {
    spriteSheet.draw(IMAGE_INDEX_ORDER[currentImageIndex], position, context);
  };
};
