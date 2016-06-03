var RescueLand = function() {
  var
    fps, screen, background, inputHandler, lander, currentLevel,

    _registerInputCallbacks = function() {
      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.SPACE, lander.reset);

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
      lander.setCurrentLevel(currentLevel);
      screen.add(lander);
    },

    _setupBackground = function(resolution) {
      background = new Screen(resolution.width, resolution.height);

      background.init('background');
      background.add(currentLevel);
      background.draw();
    };

  this.setUp = function(_fps, resolution) {
    fps = _fps;
    currentLevel = Level.ONE;

    _setupLander(resolution);
    _setupBackground(resolution);

    inputHandler = new InputHandler();
    _registerInputCallbacks();
  };

  this.start = function() {
    setInterval(_tick, 1000 / fps);
  };
};
