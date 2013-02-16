var SpriteSheet = function(imagePath, frame) {
  var
    image = new Image(),
    loaded = false;

  image.onload = function() {
    loaded = true;
  };

  image.src = imagePath;

  this.draw = function(imageIndex, context) {
    var sx, sy;

    if (loaded) {
      sx = imageIndex * frame.width(),
      sy = 0;

      context.drawImage(image, sx, sy, frame.width(), frame.height(), 0, 0, frame.width(), frame.height());
    }
  };
};
