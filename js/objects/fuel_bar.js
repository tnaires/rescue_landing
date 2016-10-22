var FuelBar = function(_lander) {
  var
    GREEN = '#00FF00',
    YELLOW = '#FFFF00',
    ORANGE = '#FF9900',
    RED = '#FF0000',

    _drawFuelRect = function(context) {
      context.strokeStyle = YELLOW;
      context.lineWidth = 4;
      context.strokeRect(500, 4, 108, 20);
    },

    _drawFuelFilling = function(context) {
      var fuelPercentage = Math.floor(_lander.currentFuel() / _lander.currentLevel().fuel() * 100);

      if (fuelPercentage < 25) {
        context.fillStyle = RED;
      } else if (fuelPercentage < 50) {
        context.fillStyle = ORANGE;
      } else if (fuelPercentage < 75) {
        context.fillStyle = YELLOW;
      } else {
        context.fillStyle = GREEN;
      }

      context.fillRect(504, 8, fuelPercentage, 12);
    },

    _drawFuelLabel = function(context) {
      context.textAlign = 'left';
      context.fillStyle = '#FFFFFF';
      context.font = '18px "Lucida Console", Monaco, monospace';
      context.fillText('FUEL: ', 440, 20);
    };

  this.clear = function(context) {

  };

  this.update = function() {

  };

  this.draw = function(context) {
    if (_lander.currentLevel().playable()) {
      _drawFuelRect(context);
      _drawFuelFilling(context);
      _drawFuelLabel(context);
    }
  };
};
