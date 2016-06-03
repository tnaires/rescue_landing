var Hostage = function(position) {
  var
    IMAGE_INDEX_ORDER = [0, 1, 2, 1],
    IMAGE_INDEX_CHANGE_TIME = 200,

    frame = new Rectangle(Hostage.SIZE, Hostage.SIZE),
    spriteSheet = new SpriteSheet('res/hostage.png', frame),

    currentImageIndex = IMAGE_INDEX_ORDER[0],

    _cycle = function(context) {
      context.clearRect(position.x() - 1, position.y() - 1, frame.width() + 2, frame.height() + 2);
      currentImageIndex = (currentImageIndex + 1) % 4;
      spriteSheet.draw(IMAGE_INDEX_ORDER[currentImageIndex], position, context);
    };

  this.render = function(context) {
    setInterval(_cycle, IMAGE_INDEX_CHANGE_TIME, context);
  };
};

Hostage.SIZE = 15;
