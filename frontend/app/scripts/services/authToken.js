'use strict';

angular.module('profileMeApp')
    .factory('authToken', function ($window) {
  var storage = $window.localStorage;
  var userToken = 'userToken';
  var cashedToken;

  var authToken = {
    setToken: function (token) {
      cashedToken = token;
      storage.setItem(userToken, token);
    },
    getToken: function () {
      if (!cashedToken) {
        storage.getItem(userToken);
      }
      return cashedToken;
    },
    isAuthenticated: function () {
      return !!authToken.getToken();
    },
    removeToken: function () {
      cashedToken = null;
      storage.removeItem(userToken);
    }
  };

  return authToken;
});
