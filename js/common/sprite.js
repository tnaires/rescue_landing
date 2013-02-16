var Sprite = function(imagePath) {
  var
    img = new Image(),
    loaded = false;

  img.onload = function() {
    loaded = true;
  };

  img.src = imagePath;

  this.image = function() {
    return img;
  };

  this.ready = function() {
    return loaded;
  };

  this.draw = function(context) {
    if (loaded) {
      context.drawImage(img, 0, 0);
    }
  };
};
