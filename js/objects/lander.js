var Lander = function() {
  var
    frame = new Rectangle(40, 40),
    spriteSheet = new SpriteSheet('res/lander.png', frame),

    position = new Position(0, 0),
    gravity = new Acceleration(0, 0.05),
    boost = new Acceleration(0, -0.2);
    speed = new Speed(0, 0),
    boosting = false,

    updatePosition = function() {
      speed.accelerate(gravity);
      position.shift(speed);
    };

  this.draw = function(context) {
    spriteSheet.draw(boosting ? 1 : 0, position, context);
    updatePosition();
  };

  this.boost = function() {
    boosting = true;
    speed.accelerate(boost);
  };

  this.release = function() {
    boosting = false;
  };
};
