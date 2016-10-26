Level.OPTIONS = new Info(function(context) {
  var canvas = context.canvas;
  context.textAlign = 'center';

  context.fillStyle = '#FFFF88';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#000000';
  context.font = 'bold 40px "Lucida Console", Monaco, monospace';
  context.fillText('Select an option', canvas.width / 2, 60);

  context.fillStyle = SavedDataManager.INSTANCE.storedData() ? '#000000' : '#CCCCCC';
  context.font = 'bold 25px "Lucida Console", Monaco, monospace';
  context.fillText("Press 'L' to load last game", canvas.width / 2, 150);
  context.font = 'bold 20px "Lucida Console", Monaco, monospace';
  context.fillText("Nothing will happen if there's no saved data", canvas.width / 2, 180);

  context.fillStyle = '#000000';

  context.font = 'bold 25px "Lucida Console", Monaco, monospace';
  context.fillText("Press 'SPACE' for normal difficulty", canvas.width / 2, 250);
  context.font = 'bold 20px "Lucida Console", Monaco, monospace';
  context.fillText("Each rescued hostage will replenish some fuel", canvas.width / 2, 280);

  context.font = 'bold 25px "Lucida Console", Monaco, monospace';
  context.fillText("Press 'ENTER' for hard difficulty", canvas.width / 2, 350);
  context.font = 'bold 20px "Lucida Console", Monaco, monospace';
  context.fillText("No fuel replenishment", canvas.width / 2, 380);
});
