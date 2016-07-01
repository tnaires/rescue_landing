var CelestialBody = function(_gravity) {
  var gravityAcceleration = new Acceleration(0, _gravity);

  this.gravity = function() {
    return gravityAcceleration;
  }
};

CelestialBody.EARTH = new CelestialBody(0.05);
