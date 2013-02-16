var SpriteSheet = function(imagePath, frame) {
  var sprite = new Sprite(imagePath);

  this.draw = function(imageIndex, context) {
    var sx, sy;

    if (sprite.ready()) {
      sx = imageIndex * frame.width(),
      sy = 0;

      context.drawImage(sprite.image(), sx, sy, frame.width(), frame.height(), 0, 0, frame.width(), frame.height());
    }
  };
};
