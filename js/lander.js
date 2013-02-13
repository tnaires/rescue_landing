var Lander = function() {
  var sprite = new Sprite('res/lander.png');

  this.draw = function(context) {
    sprite.draw(context);
  };
};
