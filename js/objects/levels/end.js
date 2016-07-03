Level.END = new Info(function(context) {
  var canvas = context.canvas;

  context.fillStyle = '#FFFFCC';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.textAlign = 'center';
  context.fillStyle = '#000000';
  context.font = 'bold 80px "Lucida Console", Monaco, monospace';
  context.fillText('CONGRATZ!', canvas.width / 2, 120);

  context.font = '20px "Lucida Console", Monaco, monospace';
  context.fillText('Developed and designed by', canvas.width / 2, 250);

  context.font = 'bold 40px "Lucida Console", Monaco, monospace';
  context.fillText('Tarso', canvas.width / 2, 310);

  context.fillStyle = '#0066FF';
  context.font = '20px "Lucida Console", Monaco, monospace';
  context.fillText('tnaires@gmail.com', canvas.width / 2, 340);

  context.fillStyle = '#000000';
  context.font = '20px "Lucida Console", Monaco, monospace';
  context.fillText('Thanks for playing!', canvas.width / 2, 430);
});
