var
  resolution = {
    width: 640,
    height: 480
  },
  Game = function() {
    this.setUp = function() {
      var canvas = document.getElementById('gameCanvas');
      canvas.width = resolution.width;
      canvas.height = resolution.height;
    };
  },
  game = new Game();

game.setUp();
