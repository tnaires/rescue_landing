var Lander = function() {
  var
    INITIAL_COORDINATES = {X: 50, Y: 50},
    LANDER_SIZE = 40,
    SPRITE_INDEX = { DEFAULT: 0, BOOSTING: 1, DESTROYED: 2, FAIL: 3, DONE: 4 },
    FALL_SPEED_LIMIT = 2,
    FUEL_REPLENISHMENT_PERCENTAGE = 0.2,

    frame = new Rectangle(LANDER_SIZE, LANDER_SIZE),
    spriteSheet = new SpriteSheet('res/lander.png', frame),

    boost = new Acceleration(0, -0.2),

    currentLevel,
    hostageCount,
    hostagesRescued = 0,
    hostagesKilled = 0,
    hardMode = false,

    position,
    speed,
    shiftDirection,
    fuel,

    boosting,
    destroyed,
    landed,
    failedRescue,
    successRescue,

    _resetStatistics = function() {
      hostagesRescued = 0;
      hostagesKilled = 0;
      hardMode = false;
    },

    _moveToNextLevel = function() {
      currentLevel = currentLevel.nextLevel();

      if (currentLevel === Level.TITLE) {
        _resetStatistics();
      }
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
    },

    _replenishFuel = function() {
      var replenishment = Math.floor(FUEL_REPLENISHMENT_PERCENTAGE * currentLevel.fuel());

      if (fuel + replenishment > currentLevel.fuel()) {
        fuel = currentLevel.fuel();
      } else {
        fuel += replenishment;
      }
    },

    _hostageAtCurrentPosition = function() {
      var positionToCheck = new Position(
          position.x() + LANDER_SIZE / 2,
          position.y() + (LANDER_SIZE - Hostage.SIZE)
      );

      return currentLevel.hostageAtPosition(positionToCheck);
    };

  this.setHardModeOn = function() {
    hardMode = true;
  };

  this.reset = function(loadNextLevel) {
    if (loadNextLevel && (!currentLevel.playable() || successRescue)) {
      _moveToNextLevel();
    }

    if (currentLevel.playable()) {
      hostageCount = 0;
      currentLevel.reset();

      boosting = false;
      destroyed = false;
      landed = false;
      failedRescue = false;
      successRescue = false;

      shiftDirection = Shift.NONE;
      fuel = currentLevel.fuel();
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
        speed.accelerate(currentLevel.celestialBody().gravity());
      }

      if (boosting && fuel > 0) {
        landed = false;
        speed.accelerate(boost);
        fuel--;
      };

      position.shift(speed);

      if (_bottomCollision()) {
        if (_notLandedProperly() || _topCollision() || speed.vertical() > FALL_SPEED_LIMIT) {
          destroyed = true;

          if (_hostageAtCurrentPosition()) {
            hostagesKilled++;
          }
        } else {
          landed = true;
        }

        speed.reset();
      } else if (_topCollision()) {
        destroyed = true;
        speed.reset();
      } else if (currentLevel.exitReached(position)) {
        failedRescue = (hostageCount < currentLevel.hostageCount());
        successRescue = (hostageCount == currentLevel.hostageCount());

        if (successRescue) {
          hostagesRescued += currentLevel.hostageCount();
        }
      }

      if (destroyed) {
        hostagesKilled += hostageCount;
      }

      if (landed) {
        var hostage = _hostageAtCurrentPosition();

        if (hostage && !hostage.alreadyRescued()) {
          hostageCount++;
          hostage.rescue();

          if (!hardMode) {
            _replenishFuel();
          }
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
      } else if (boosting && fuel > 0) {
        spriteIndex = SPRITE_INDEX.BOOSTING;
      }

      spriteSheet.draw(spriteIndex, position, context);
    }
  };

  this.currentFuel = function() {
    return fuel;
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

  this.hostageCount = function() {
    return hostageCount;
  };

  this.hostagesRescued = function() {
    return hostagesRescued;
  };

  this.hostagesKilled = function() {
    return hostagesKilled;
  };
};
