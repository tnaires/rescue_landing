var Lander = function() {
  var
    INITIAL_COORDINATES = {X: 50, Y: 50},
    LANDER_SIZE = 40,
    SPRITE_INDEX = { DEFAULT: 0, BOOSTING: 1, DESTROYED: 2, FAIL: 3, DONE: 4 },
    FALL_SPEED_LIMIT = 2,

    frame = new Rectangle(LANDER_SIZE, LANDER_SIZE),
    spriteSheet = new SpriteSheet('res/lander.png', frame),

    gravity = new Acceleration(0, 0.05),
    boost = new Acceleration(0, -0.2),

    currentLevel,
    hostageCount,

    position,
    speed,
    shiftDirection,

    boosting,
    destroyed,
    landed,
    failedRescue,
    successRescue,

    _moveToNextLevel = function() {
      currentLevel = currentLevel.nextLevel();
    },

    _bottomCollision = function() {
      return currentLevel.wallsCollideWith(position.plus(0, LANDER_SIZE)) ||
        currentLevel.wallsCollideWith(position.plus(LANDER_SIZE / 2, LANDER_SIZE)) ||
        currentLevel.wallsCollideWith(position.plus(LANDER_SIZE, LANDER_SIZE));
    },

    _notLandedProperly = function() {
      var
        leftBottomCornerCollision = currentLevel.wallsCollideWith(position.plus(0, LANDER_SIZE)),
        middleBottomCollision = currentLevel.wallsCollideWith(position.plus(LANDER_SIZE / 2, LANDER_SIZE)),
        rightBottomCornerCollision = currentLevel.wallsCollideWith(position.plus(LANDER_SIZE, LANDER_SIZE));

      return leftBottomCornerCollision && !middleBottomCollision && !rightBottomCornerCollision ||
             !leftBottomCornerCollision && !middleBottomCollision && rightBottomCornerCollision;
    },

    _topCollision = function() {
      return currentLevel.wallsCollideWith(position) ||
        currentLevel.wallsCollideWith(position.plus(LANDER_SIZE, 0));
    };

  this.reset = function(loadNextLevel) {
    if (loadNextLevel && (!currentLevel.playable() || successRescue)) {
      _moveToNextLevel();
    }

    if (currentLevel.playable()) {
      hostageCount = currentLevel.hostageCount();
      currentLevel.reset();

      boosting = false;
      destroyed = false;
      landed = false;
      failedRescue = false;
      successRescue = false;

      shiftDirection = Shift.NONE;
      position = new Position(INITIAL_COORDINATES.X, INITIAL_COORDINATES.Y);
      speed = new Speed(0, 0);
    }
  };

  this.setCurrentLevel = function(_currentLevel) {
    currentLevel = _currentLevel;
    this.reset(false);
  };

  this.currentLevel = function() {
    return currentLevel;
  };

  this.clear = function(context) {
    var canvas = context.canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.update = function() {
    if (currentLevel.playable() && !destroyed && !failedRescue && !successRescue) {
      if (!landed) {
        position.shift(shiftDirection.speed());
        speed.accelerate(gravity);
      }

      if (boosting) {
        landed = false;
        speed.accelerate(boost);
      };

      position.shift(speed);

      if (_bottomCollision()) {
        if (_notLandedProperly() || _topCollision() || speed.vertical() > FALL_SPEED_LIMIT) {
          destroyed = true;
        } else {
          landed = true;
        }

        speed.reset();
      } else if (_topCollision()) {
        destroyed = true;
        speed.reset();
      } else if (currentLevel.exitReached(position)) {
        failedRescue = (hostageCount != 0);
        successRescue = (hostageCount == 0);
      }

      if (landed) {
        var
          positionToCheck = new Position(
            position.x() + LANDER_SIZE / 2,
            position.y() + (LANDER_SIZE - Hostage.SIZE)
          ),
          hostage = currentLevel.hostageAtPosition(positionToCheck);

        if (hostage && !hostage.alreadyRescued()) {
          hostageCount--;
          hostage.rescue();
        }
      }
    }
  };

  this.draw = function(context) {
    if (currentLevel.playable()) {
      var spriteIndex = SPRITE_INDEX.DEFAULT;

      if (destroyed) {
        spriteIndex = SPRITE_INDEX.DESTROYED;
      } else if (failedRescue) {
        spriteIndex = SPRITE_INDEX.FAIL;
      } else if (successRescue) {
        spriteIndex = SPRITE_INDEX.DONE;
      } else if (boosting) {
        spriteIndex = SPRITE_INDEX.BOOSTING;
      }

      spriteSheet.draw(spriteIndex, position, context);
    }
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
