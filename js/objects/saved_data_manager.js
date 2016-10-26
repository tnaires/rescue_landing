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

    document.cookie = 'currentLevelIndex=' + data['currentLevelIndex'] +
      ';expires=' + expirationDate.toUTCString();
    document.cookie = 'hardMode=' + data['hardMode'].toString() +
      ';expires=' + expirationDate.toUTCString();
    document.cookie = 'hostagesRescued=' + data['hostagesRescued'] +
      ';expires=' + expirationDate.toUTCString();
    document.cookie = 'hostagesKilled=' + data['hostagesKilled'] +
      ';expires=' + expirationDate.toUTCString();
  };

  this.erase = function() {
    document.cookie = 'currentLevelIndex=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'hardMode=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'hostagesRescued=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'hostagesKilled=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
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
