Level.HELP = new Info(function(context) {
  var canvas = context.canvas;
  context.textAlign = 'center';

  context.fillStyle = '#CCFFCC';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#000055';
  context.font = 'bold 50px "Lucida Console", Monaco, monospace';
  context.fillText('How to play', canvas.width / 2, 60);

  var hostage = new Image();
  hostage.src = 'res/screenshots/hostage.png';
  hostage.onload = function() {
    context.drawImage(hostage, (canvas.width - hostage.width) / 2, 100);

    context.fillStyle = '#005500';
    context.font = 'bold 20px "Lucida Console", Monaco, monospace';
    context.fillText('Rescue all hostages and leave the stage!', canvas.width / 2, 200);
  };

  var fuel = new Image();
  fuel.src = 'res/screenshots/fuel.png';
  fuel.onload = function() {
    context.drawImage(fuel, (canvas.width - fuel.width) / 2, 260);

    context.fillStyle = '#EE0000';
    context.font = 'bold 20px "Lucida Console", Monaco, monospace';
    context.fillText('Whatch your fuel!', canvas.width / 2, 320);
  };

  context.font = 'bold 20px "Lucida Console", Monaco, monospace';
  context.fillText('Commands: see instructions at the bottom', canvas.width / 2, 390);

  context.textAlign = 'center';
  context.fillStyle = '#000055';
  context.font = '20px "Lucida Console", Monaco, monospace';
  context.fillText('Press SPACE to begin', canvas.width / 2, 415);
});
