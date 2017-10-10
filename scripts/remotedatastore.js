(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }

    this.serverUrl = url;
  }

  // RemoteDataStore.prototype.add = function (key, val) {
  //   $.post(this.serverUrl, val, function (serverResponse) {
  //     console.log(serverResponse);
  //   });
  // };

  dpd.coffeeorders.post(function(results, error) {
    console.log(results);
  })

  // RemoteDataStore.prototype.getAll = function (cb) {
  //   $.get(this.serverUrl, function (serverResponse) {
  //     console.log(serverResponse);
  //     cb(serverResponse);
  //   });
  // };

  dpd.coffeeorders.get(function(results, error) {
    console.log(results);
  });

  // RemoteDataStore.prototype.get = function (key, cb) {
  //   $.get(this.serverUrl + '/' + key, function (serverResponse) {
  //     console.log(serverResponse);
  //     cb(serverResponse);
  //   });
  // };
  //

  dpd.coffeeorders.get(function(results, error) {

  });

  RemoteDataStore.prototype.remove = function (key) {
    $.ajax(this.serverUrl + '/' + key, {
      type: 'DELETE'
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
