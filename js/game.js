var Game = function() {
  var
    screen = new Screen(640, 480),
    player = new Player();

  this.setUp = function() {
    screen.init();
    screen.add(player);
  };

  this.start = function() {
    screen.draw();
  };
};
