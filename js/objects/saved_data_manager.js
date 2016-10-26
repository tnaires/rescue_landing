var SavedDataManager = function() {
  this.save = function(level) {
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 20);

    document.cookie = 'currentLevelIndex=' + level.index() +
      '; expires=' + expirationDate.toUTCString();
  };

  this.erase = function() {
    document.cookie = 'currentLevelIndex=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
  };

  this.load = function() {
    var currentLevelIndex = /\d+/.exec(document.cookie);
    return currentLevelIndex && parseInt(currentLevelIndex[0]);
  };
};

SavedDataManager.INSTANCE = new SavedDataManager();
