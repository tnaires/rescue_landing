Level.TITLE = new Info(function(context) {
  var canvas = context.canvas;
  context.textAlign = 'center';

  context.fillStyle = '#000000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#FFFF00';
  context.font = 'bold 100px "Lucida Console", Monaco, monospace';
  context.fillText('Rescue', canvas.width / 2, 120);
  context.fillText('Landing!', canvas.width / 2, 240);

  context.fillStyle = '#FFFFFF';
  context.font = '20px "Lucida Console", Monaco, monospace';
  context.fillText('Press SPACE', canvas.width / 2, 400);
});
