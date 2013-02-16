var Lander = function() {
  var
    frame = new Rectangle(40, 40),
    spriteSheet = new SpriteSheet('res/lander.png', frame),

    position = new Position(0, 0),
    gravity = new Acceleration(0, 0.05),
    boost = new Acceleration(0, -0.2);
    speed = new Speed(0, 0),

    boosting = false,
    shiftDirection = Shift.NONE,

    updatePosition = function() {
      speed.accelerate(gravity);

      if (boosting) {
        speed.accelerate(boost);
      };

      position.shift(speed);
      position.shift(shiftDirection.speed());
    };

  this.draw = function(context) {
    spriteSheet.draw(boosting ? 1 : 0, position, context);
    updatePosition();
  };

  this.boost = function() {
    boosting = true;
  };

  this.release = function() {
    boosting = false;
  };

  this.shiftLeft = function() {
    shiftDirection = Shift.LEFT;
  };

  this.shiftRight = function() {
    shiftDirection = Shift.RIGHT;
  };

  this.noShift = function() {
    shiftDirection = Shift.NONE;
  };
};
