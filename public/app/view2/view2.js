'use strict';

angular.module('wikiApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'app/view2/view2.html',
    controller: 'AppCtrl'
  });
}])

.controller('View2Ctrl', function() {
    });
