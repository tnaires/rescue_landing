var FuelBar = function(_lander) {
  var
    _drawFuelRect = function(context) {
      context.strokeStyle = '#FFFF00';
      context.lineWidth = 4;
      context.strokeRect(500, 4, 108, 20);
    },

    _drawFuelFilling = function(context) {
      var fuelPercentage = Math.floor(_lander.currentFuel() / _lander.currentLevel().fuel() * 100);

      context.fillStyle = '#00FF00';
      context.fillRect(504, 8, fuelPercentage, 12);
    },

    _drawFuelLabel = function(context) {
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
