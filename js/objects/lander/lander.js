var Lander = function() {
  var
    COORDINATES = {X: 30, Y: 0},

    frame = new Rectangle(40, 40),
    spriteSheet = new SpriteSheet('res/lander.png', frame),

    position = new Position(COORDINATES.X, COORDINATES.Y),
    gravity = new Acceleration(0, 0.05),
    boost = new Acceleration(0, -0.2);
    speed = new Speed(0, 0),

    boosting = false,
    shiftDirection = Shift.NONE;

  this.clear = function(context) {
    // Clear a rectangle 1 pixel larger than the sprite
    context.clearRect(position.x() - 1, position.y() - 1, frame.width() + 2, frame.height() + 2);
  };

  this.update = function() {
    speed.accelerate(gravity);

    if (boosting) {
      speed.accelerate(boost);
    };

    position.shift(speed);
    position.shift(shiftDirection.speed());
  };

  this.draw = function(context) {
    spriteSheet.draw(boosting ? 1 : 0, position, context);
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
