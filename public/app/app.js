'use strict';

// Declare app level module which depends on views, and components
angular.module('wikiApp', [
  'ngRoute',
  'wikiApp.controllers',
  'wikiApp.directives',
  'wikiApp.services',
  'wikiApp.factories',
  'wikiApp.filters',
  'wikiApp.view1',
  'wikiApp.view2'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
