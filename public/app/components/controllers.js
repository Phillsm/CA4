angular.module('wikiApp.controllers', []).
  controller('AppCtrl', function ($scope,wikiFactory) {
    $scope.title = "A Mean Wiki App";
    $scope.wikis;
    $scope.wiki;
    $scope.categories;
    $scope.clickLet;
    $scope.getWiki =  function (title) {
      wikiFactory.getWiki(title).success(function(data){
        $scope.wiki = data;
      });
    }
    $scope.search = function() {
      var searchstr = $('#searchinp').val()
      $scope.findWiki(searchstr);
    }
    $scope.findWiki = function (search) {
      wikiFactory.findWiki(search).success(function(data){
        $scope.wikis = data;
      });
    }
    $scope.getWikisWithCategory = function (category) {
      wikiFactory.getWikisWithCategory(category).success(function(data){
        $scope.wikis = data;
      })
    }
    $scope.getCategories = function() {
      wikiFactory.getCategories().success(function(data){
        $scope.categories = data;
      })
    }
    $scope.myFilter = function(thang) {
      return (new RegExp('^'+$scope.clickLet)).test(thang)
    }
    $scope.setClicked = function(x){
      $scope.clickLet = x;
    }

  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  });



