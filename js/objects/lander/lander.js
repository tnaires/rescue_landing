var Lander = function() {
  var
    INITIAL_COORDINATES = {X: 50, Y: 50},
    LANDER_SIZE = 40,
    SPRITE_INDEX = { DEFAULT: 0, BOOSTING: 1, DESTROYED: 2 },

    frame = new Rectangle(LANDER_SIZE, LANDER_SIZE),
    spriteSheet = new SpriteSheet('res/lander.png', frame),

    gravity = new Acceleration(0, 0.05),
    boost = new Acceleration(0, -0.2),

    currentLevel,

    position,
    lastPosition,
    speed,
    shiftDirection,

    boosting,
    destroyed,
    landed,

    _clearPosition = function(context, pos) {
      // Clear a rectangle 1 pixel larger than the sprite
      context.clearRect(pos.x() - 1, pos.y() - 1, frame.width() + 2, frame.height() + 2);
    },

    _bottomCollision = function() {
      return currentLevel.wallsCollideWith(position.plus(0, LANDER_SIZE)) ||
        currentLevel.wallsCollideWith(position.plus(LANDER_SIZE, LANDER_SIZE));
    },

    _topCollision = function() {
      return currentLevel.wallsCollideWith(position) ||
        currentLevel.wallsCollideWith(position.plus(LANDER_SIZE, 0));
    };

  this.reset = function() {
    boosting = false;
    destroyed = false;
    landed = false;
    shiftDirection = Shift.NONE;
    position = new Position(INITIAL_COORDINATES.X, INITIAL_COORDINATES.Y);
    speed = new Speed(0, 0);
  };

  this.setCurrentLevel = function(_currentLevel) {
    currentLevel = _currentLevel;
    this.reset();
  };

  this.clear = function(context) {
    if (lastPosition) {
      _clearPosition(context, lastPosition);
    }

    _clearPosition(context, position);
  };

  this.update = function() {
    if (!destroyed) {
      if (!landed) {
        position.shift(shiftDirection.speed());
        speed.accelerate(gravity);
      }

      if (boosting) {
        landed = false;
        speed.accelerate(boost);
      };

      lastPosition = position;
      position.shift(speed);

      if (_bottomCollision()) {
        if (_topCollision() || speed.vertical() > 2) {
          destroyed = true;
        } else {
          landed = true;
        }

        speed.reset();
      } else if (_topCollision()) {
        destroyed = true;
        speed.reset();
      }
    }
  };

  this.draw = function(context) {
    var spriteIndex = SPRITE_INDEX.DEFAULT;

    if (destroyed) {
      spriteIndex = SPRITE_INDEX.DESTROYED;
    } else if (boosting) {
      spriteIndex = SPRITE_INDEX.BOOSTING;
    }

    spriteSheet.draw(spriteIndex, position, context);
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
