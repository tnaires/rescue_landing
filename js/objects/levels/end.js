Level.END = new Info(function(context) {
  var canvas = context.canvas;

  context.fillStyle = '#FFFFCC';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.textAlign = 'center';
  context.fillStyle = '#FF0000';
  context.font = 'bold 80px "Lucida Console", Monaco, monospace';
  context.fillText('CONGRATZ!', canvas.width / 2, 100);

  context.fillStyle = '#005500';
  context.font = '20px "Lucida Console", Monaco, monospace';
  context.fillText('Developed and designed by', canvas.width / 2, 320);

  context.font = 'bold 40px "Lucida Console", Monaco, monospace';
  context.fillText('Tarso', canvas.width / 2, 360);

  context.fillStyle = '#0066FF';
  context.font = 'bold 20px "Lucida Console", Monaco, monospace';
  context.fillText('Thanks for playing!', canvas.width / 2, 430);
});
