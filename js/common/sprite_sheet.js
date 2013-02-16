var SpriteSheet = function(imagePath, frame) {
  var sprite = new Sprite(imagePath);

  this.draw = function(imageIndex, position, context) {
    var sx, sy;

    if (sprite.ready()) {
      sx = imageIndex * frame.width(),
      sy = 0;

      context.drawImage(
        sprite.image(),
        sx, sy, frame.width(), frame.height(),
        position.x(), position.y(), frame.width(), frame.height());
    }
  };
};
