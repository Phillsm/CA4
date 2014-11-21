'use strict';
angular.module('wikiApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'app/view1/searchView.html',
    controller: 'AppCtrl'
  });
}])

.controller('View1Ctrl', function() {
});