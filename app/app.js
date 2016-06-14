'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'menuItem',
  'myMenu'
]).controller('MenuController', ['$scope', function($scope) {

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
  
}]);
