var Title = function() {
  var
    nextLevel,

    _drawTitle = function(context) {
      var canvas = context.canvas;

      context.font = 'bold 100px "Lucida Console", Monaco, monospace';
      context.textAlign = 'center';

      context.fillText('Rescue', canvas.width / 2, 120);
      context.fillText('Landing!', canvas.width / 2, 240);
    },

    _drawBeginMessage = function(context) {
      var canvas = context.canvas;

      context.font = '20px "Lucida Console", Monaco, monospace';
      context.textAlign = 'center';

      context.fillText('Press SPACE to begin', canvas.width / 2, 400);
    };

  this.clear = function(context) {
    var canvas = context.canvas;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  this.draw = function(context) {
    _drawTitle(context);
    _drawBeginMessage(context);
  };

  this.setNextLevel = function(_nextLevel) {
    nextLevel = _nextLevel;
  };

  this.nextLevel = function() {
    return nextLevel;
  };

  this.playable = function() {
    return false;
  };
};

Level.TITLE = new Title();
