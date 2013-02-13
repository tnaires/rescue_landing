var Game = function() {
  var
    fps,
    screen,
    lander;

  this.setUp = function(_fps, resolution) {
    fps = _fps;
    
    screen = new Screen(resolution.width, resolution.height);
    screen.init();

    lander = new Lander();
    screen.add(lander);
  };

  this.start = function() {
    screen.draw();
    setTimeout(this.start, 1000 / fps);
  };
};
