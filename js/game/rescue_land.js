var RescueLand = function() {
  var fps, screen, inputHandler, lander;

  this.setUp = function(_fps, resolution) {
    fps = _fps;
    
    screen = new Screen(resolution.width, resolution.height);
    screen.init();

    inputHandler = new InputHandler();

    lander = new Lander();
    screen.add(lander);

    inputHandler.buildListeners();
  };

  this.start = function() {
    screen.clear();
    screen.draw();
    setInterval(this.start, 1000 / fps);
  };
};
