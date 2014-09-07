var RescueLand = function() {
  var
    fps, screen, inputHandler, lander, level,

    registerInputCallbacks = function() {
      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.ARROW_UP, lander.boost);
      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.ARROW_UP, lander.release);

      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.ARROW_LEFT, lander.shiftLeft);
      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.ARROW_LEFT, lander.noShift);

      inputHandler.registerCallback(InputHandler.ON_KEY_DOWN, InputHandler.ARROW_RIGHT, lander.shiftRight);
      inputHandler.registerCallback(InputHandler.ON_KEY_UP, InputHandler.ARROW_RIGHT, lander.noShift);

      inputHandler.buildListeners();
    },

    tick = function() {
      screen.clear();
      screen.draw();
    };

  this.setUp = function(_fps, resolution) {
    fps = _fps;

    screen = new Screen(resolution.width, resolution.height);
    screen.init();

    inputHandler = new InputHandler();

    lander = new Lander();
    screen.add(lander);

    level = new Level();
    screen.add(level);

    registerInputCallbacks();
  };

  this.start = function() {
    setInterval(tick, 1000 / fps);
  };
};
