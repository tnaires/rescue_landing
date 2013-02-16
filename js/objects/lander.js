var Lander = function() {
  var
    frame = new Rectangle(40, 40),
    spriteSheet = new SpriteSheet('res/lander.png', frame),

    position = new Position(0, 0),
    gravity = new Acceleration(0, 0.05),
    speed = new Speed(0, 0),

    updatePosition = function() {
      speed.accelerate(gravity);
      position.shift(speed);
    };

  this.draw = function(context) {
    spriteSheet.draw(0, position, context);
    updatePosition();
  };
};
