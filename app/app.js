'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'menuItem',
  'myMenu'
]).controller('MenuController', ['$scope', function($scope) {
  
  // set actions for your menu items in a controller scope

  this.myAction = function(event) {
    alert("This is a custom event");
  };
  
  this.customAction = function(event) {
    alert("Custom actions for everybody");
  };
  
  this.genericAction = function() {
    alert("Generic Action to the rescue!")
  };
  
}]);
