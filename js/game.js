var Game = function() {
  var
    screen = new Screen(640, 480),
    lander = new Lander();

  this.setUp = function() {
    screen.init();
    screen.add(lander);
  };

  this.start = function() {
    screen.draw();
  };
};
