var
  FPS = 50,
  resolution = {
    'width': 640,
    'height': 480
  },
  game;

game = new RescueLand();
game.setUp(FPS, resolution);
game.start();
