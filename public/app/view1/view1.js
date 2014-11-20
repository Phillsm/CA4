'use strict';

angular.module('wikiApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: '/partials/partial1',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function() {
});