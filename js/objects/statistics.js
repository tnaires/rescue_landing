var Statistics = function(_lander) {
  this.clear = function(context) {

  };

  this.update = function() {

  };

  this.draw = function(context) {
    if (_lander.currentLevel().playable()) {
      var statistics = 'HOSTAGES: taken = ' +
        _lander.hostageCount() +
        ', rescued = ' +
        _lander.hostagesRescued() +
        ', killed = ' +
        _lander.hostagesKilled();

      context.textAlign = 'right';
      context.fillStyle = '#FFFFFF';
      context.font = '12px "Lucida Console", Monaco, monospace';
      context.fillText(statistics, 600, 470);
    } else if (_lander.currentLevel() === Level.END) {
      var canvas = context.canvas;

      context.textAlign = 'center';
      context.fillStyle = '#000000';

      context.font = 'bold 25px "Lucida Console", Monaco, monospace';
      context.fillText('YOUR SCORE', canvas.width / 2, 180);

      context.font = '20px "Lucida Console", Monaco, monospace';
      context.fillText('Hostages rescued: ' + _lander.hostagesRescued(), canvas.width / 2, 220);
      context.fillText('Hostages killed: ' + _lander.hostagesKilled(), canvas.width / 2, 245);
    }
  };
};
