Level.OPTIONS = new Info(function(context) {
  var canvas = context.canvas;
  context.textAlign = 'center';

  context.fillStyle = '#FFFF88';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#000000';
  context.font = 'bold 40px "Lucida Console", Monaco, monospace';
  context.fillText('Select a difficulty level', canvas.width / 2, 60);

  context.font = 'bold 30px "Lucida Console", Monaco, monospace';
  context.fillText("Press 'SPACE' for normal", canvas.width / 2, 220);
  context.font = 'bold 20px "Lucida Console", Monaco, monospace';
  context.fillText("Each rescued hostage will replenish some fuel", canvas.width / 2, 250);

  context.font = 'bold 30px "Lucida Console", Monaco, monospace';
  context.fillText("Press 'ENTER' for hard", canvas.width / 2, 320);
  context.font = 'bold 20px "Lucida Console", Monaco, monospace';
  context.fillText("No fuel replenishment", canvas.width / 2, 350);
});
