'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myButton',
  'menuItem',
  'memMenu'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('MenuController', ['$scope', function($scope) {
  this.menuTwo = [
    {
      text: "Trying it again",
      helperText: "Cmd+P"
    },
    {
      text: "Second time",
      helperText: "Cmd+D"
    }
  ];
  
  this.printPage = function(event) {
    alert("This is the print event");
  };
  
  this.boldText = function(event) {
    alert("This makes text bold");
  };
  
  this.checkboxAlert = function() {
    alert("This item's checkbox has changed")
  };
  
  this.genericAction = function() {
    alert("Generic Action to the rescue!")
  };
  
  this.items = [
    {
      text: 'Thing One',
      helpText: 'Cmd+P',
      action: function() {
        alert('Contact');
      }
    },
    {
      text: 'Thing Two',
      action: function() {
        alert('This is thing two\'s action');
      }
    },
    {
      text: 'Threee',
      helpText: 'Cmd+Q',
      action: function() {
        alert('Thing three is here');
      }
    },
  ]
}]);
