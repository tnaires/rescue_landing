var Game = function() {
  var
    fps,
    screen = new Screen(640, 480),
    lander = new Lander();

  this.setUp = function(_fps) {
    fps = _fps;

    screen.init();
    screen.add(lander);
  };

  this.start = function() {
    if (!fps) {
      throw 'Frames per second (FPS) not defined.';
    }

    screen.draw();
    setTimeout(this.start, 1000 / fps);
  };
};
