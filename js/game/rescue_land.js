var RescueLand = function() {
  var
    fps, screen, background, inputHandler, lander,

    _resetBackground = function() {
      background.clear();
      background.eraseObjects();
      background.add(lander.currentLevel());
      background.draw();
    },

    _reset = function() {
      lander.reset(true);
      _resetBackground();
    },

    _setHardDifficulty = function() {
      if (lander.currentLevel() === Level.OPTIONS) {
        lander.setHardMode(true);
        _reset();
      }
    },

    _loadLevel = function() {
      if (lander.currentLevel() === Level.OPTIONS && SavedDataManager.INSTANCE.storedData()) {
        var savedData = SavedDataManager.INSTANCE.load();

        lander.setCurrentLevelByIndex(savedData['currentLevelIndex']);
        lander.setHardMode(savedData['hardMode']);
        lander.setHostagesRescued(savedData['hostagesRescued']);
        lander.setHostagesKilled(savedData['hostagesKilled']);

        _resetBackground();
      }
    },

    _registerInputCallbacks = function() {
      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.SPACE, _reset);

      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.ENTER, _setHardDifficulty);

      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.UPCASE_L, _loadLevel);
      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.DOWNCASE_L, _loadLevel);

      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.ARROW_UP, lander.boost);
      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.ARROW_UP, lander.release);

      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.ARROW_LEFT, lander.shiftLeft);
      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.ARROW_LEFT, lander.noShift);

      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.ARROW_RIGHT, lander.shiftRight);
      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.ARROW_RIGHT, lander.noShift);

      inputHandler.buildListeners();
    },

    _tick = function() {
      screen.clear();
      screen.update();
      screen.draw();
    },

    _setupLander = function(resolution) {
      screen = new Screen(resolution.width, resolution.height);
      screen.init('lander');

      lander = new Lander();
      lander.setCurrentLevel(Level.TITLE);
      screen.add(lander);

      var fuelBar = new FuelBar(lander);
      screen.add(fuelBar);

      var statistics = new Statistics(lander);
      screen.add(statistics);
    },

    _setupBackground = function(resolution) {
      background = new Screen(resolution.width, resolution.height);

      background.init('background');
      background.add(lander.currentLevel());
      background.draw();
    };

  this.setUp = function(_fps, resolution) {
    fps = _fps;

    _setupLander(resolution);
    _setupBackground(resolution);

    inputHandler = new InputHandler();
    _registerInputCallbacks();
  };

  this.start = function() {
    setInterval(_tick, 1000 / fps);
  };
};
