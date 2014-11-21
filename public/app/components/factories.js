'use strict';

/* Factories */

angular.module('wikiApp.factories', []).
  factory('wikiFactory', function ($http) {
    var factory ={}
    factory.clickedTitle;
    factory.getWiki = function(title){
      return $http.get('http://178.62.15.16:4000/api/wikis?title='+title)
    }
    factory.findWiki = function(searchstr) {
      return $http.get('http://178.62.15.16:4000/api/wikis?search='+searchstr)
    }
    factory.getCategories = function(){
      return $http.get('http://178.62.15.16:4000/api/categories')
    }
    factory.getWikisWithCategory = function(category){
      return $http.get('http://178.62.15.16:4000/api/wikis?category='+category)
    }
  return factory;
});