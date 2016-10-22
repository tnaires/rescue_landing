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

      context.fillStyle = '#FFFFFF';
      context.font = '12px "Lucida Console", Monaco, monospace';
      context.fillText(statistics, 280, 470);
    } else if (_lander.currentLevel() === Level.END) {
      _lander.resetStatistics();
    }
  };
};
