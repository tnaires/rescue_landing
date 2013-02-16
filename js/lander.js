var Lander = function() {
  var
    frame = new Rectangle(40, 40),
    spriteSheet = new SpriteSheet('res/lander.png', frame);

  this.draw = function(context) {
    spriteSheet.draw(0, context);
  };
};
