var SavedDataManager = function() {
  var
    _readCookie = function(regexp) {
      return regexp.exec(document.cookie)[0].split('=')[1];
    };

  this.storedData = function() {
    return document.cookie;
  };

  this.save = function(data) {
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 20);

    document.cookie = 'currentLevelIndex=' + data['currentLevelIndex'];
    document.cookie = 'hardMode=' + data['hardMode'].toString();
    document.cookie = 'hostagesRescued=' + data['hostagesRescued'];
    document.cookie = 'hostagesKilled=' + data['hostagesKilled'];
    document.cookie = 'expires=' + expirationDate.toUTCString();
  };

  this.erase = function() {
    document.cookie = 'currentLevelIndex=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
  };

  this.load = function() {
    return {
      currentLevelIndex: parseInt(_readCookie(/currentLevelIndex=\d+/)),
      hardMode: _readCookie(/hardMode=\w+/) === 'true',
      hostagesKilled: parseInt(_readCookie(/hostagesKilled=\d+/)),
      hostagesRescued: parseInt(_readCookie(/hostagesRescued=\d+/)),
    };
  };
};

SavedDataManager.INSTANCE = new SavedDataManager();
