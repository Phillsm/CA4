'use strict';

/* Factories */

angular.module('wikiApp.factories', []).
  factory('wikiFactory', function ($http) {
    var factory ={}
    factory.getWiki = function(title){
      $http.get('http://178.62.15.16:4000/api/wikis?title='+title).
        success(function(data,status,headers,config){
        return data;
      })
      
    }
  return factory;
});