var CelestialBody = function(_name, _gameGravity, _realWorldGravity, _landColor, _backgroundColor) {
  var
    gravityAcceleration = new Acceleration(0, _gameGravity);

  this.gravity = function() {
    return gravityAcceleration;
  };

  this.info = function() {
    return _name + ': ' + _realWorldGravity + ' m/s\u00B2';
  };

  this.landColor = function() {
    return _landColor;
  };

  this.backgroundColor = function() {
    return _backgroundColor;
  };
};

CelestialBody.EARTH = new CelestialBody('Earth', 0.05, 9.8, '#663300', '#CCFF99');
CelestialBody.MOON = new CelestialBody('Moon', 0.005, 1.662, '#555555', '#DDDDDD');
CelestialBody.JUPITER = new CelestialBody('Jupiter', 0.15, 24.79, '#990000', '#FFCCCC');
