'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myButton'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('MenuController', ['$scope', function($scope) {
  this.items = [
    {
      text: 'Thing One',
      helpText: 'Cmd+P'
    },
    {
      text: 'Thing Two'
    },
    {
      text: 'Threee',
      helpText: 'Cmd+Q'
    },
  ]
  
  this.myAction = function() {
    alert('wooo!');
  }
}]);
