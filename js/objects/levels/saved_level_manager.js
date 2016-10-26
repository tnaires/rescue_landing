var SavedLevelManager = function() {
  this.save = function(level) {
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 20);

    document.cookie = 'currentLevelIndex=' + level.index() +
      '; expires=' + expirationDate.toUTCString();
  };

  this.erase = function() {
    document.cookie = 'currentLevelIndex=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
  };
};

SavedLevelManager.INSTANCE = new SavedLevelManager();
