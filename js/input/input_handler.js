var InputHandler = function() {
  var callbacks = {};

  this.registerCallback = function(inputEvent, key, callback) {
    if (!callbacks[inputEvent]) {
      callbacks[inputEvent] = {};
    }

    var eventCallbacks = callbacks[inputEvent];

    if (!eventCallbacks[key]) {
      eventCallbacks[key] = [];
    }

    eventCallbacks[key].push(callback);
  };

  this.buildListeners = function() {
    for (inputEvent in callbacks) {
      window.addEventListener(inputEvent, function(e) {
        var eventCallbacks = callbacks[e.type][e.keyCode];

        if (eventCallbacks) {
          for (var i = 0; i < eventCallbacks.length; i++) {
            eventCallbacks[i]();
          }
        }
      });
    }
  };
};

InputHandler.ON_KEY_DOWN = 'keydown';
InputHandler.ON_KEY_UP = 'keyup';

InputHandler.SPACE = 32;
InputHandler.ARROW_LEFT = 37;
InputHandler.ARROW_UP = 38;
InputHandler.ARROW_RIGHT = 39;
InputHandler.ARROW_DOWN = 40;
InputHandler.ENTER = 13;
InputHandler.UPCASE_L = 76;
InputHandler.DOWNCASE_L = 108;
