/*
Comment out when using node tests/main.js
(function (window) {
  'use strict';
  GLOBAL.App = window.App;
  GLOBAL.Truck = App.Truck;
  GLOBAL.DataStore = App.DataStore;
  GLOBAL.myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
})(window);
*/

(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var SERVER_URL = 'http://localhost:2403/coffeeorders';

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var webshim = window.webshim;
  var myTruck = new Truck('ncc-1701', remoteDS);

  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });

  webshim.polyfill('forms forms-ext');
  webshim.setOptions('forms', { addValidators: true, lazyCustomMessages: true });

  formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);
