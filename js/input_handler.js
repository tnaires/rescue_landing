var InputHandler = function() {
  var callbacks = {};

  this.registerCallback = function(inputEvent, key, callback) {
    if (!callbacks[inputEvent]) {
      callbacks[inputEvent] = {};
    }

    eventCallbacks = callbacks[inputEvent];

    if (!eventCallbacks[key]) {
      eventCallbacks[key] = [];
    }

    eventCallbacks[key].push(callback);
  };

  this.buildListeners = function() {
    for (inputEvent in callbacks) {
      window.addEventListener(inputEvent, function(e) {
        for (key in callbacks[inputEvent]) {
          if (e.keyCode == key) {
            eventCallbacks = callbacks[inputEvent][key];

            for (var i = 0; i < eventCallbacks.length; i++) {
              eventCallbacks[i]();
            }
          }
        }
      });
    }
  };
};

InputHandler.ON_KEY_DOWN = 'keydown';
InputHandler.ON_KEY_PRESS = 'keypress';
InputHandler.ON_KEY_UP = 'keyup';

InputHandler.ARROW_UP = 38;
InputHandler.ARROW_DOWN = 40;
InputHandler.ARROW_LEFT = 37;
InputHandler.ARROW_RIGHT = 39;
