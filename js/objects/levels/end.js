Level.END = new Info(function(context) {
  var canvas = context.canvas;
  context.textAlign = 'center';

  context.font = 'bold 100px "Lucida Console", Monaco, monospace';
  context.fillText('CONGRATZ!', canvas.width / 2, 120);

  context.font = '20px "Lucida Console", Monaco, monospace';
  context.fillText('Thanks for playing!', canvas.width / 2, 400);
});
