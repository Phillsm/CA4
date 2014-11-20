angular.module('wikiApp.controllers', []).
  controller('AppCtrl', function ($scope,wikiFactory) {
    $scope.title = "A Mean Wiki App";
    var test = wikiFactory.getWiki('Abacus');
    $scope.wut = test;
  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  });



