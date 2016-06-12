'use strict';

angular.
  module('woof').
  directive('woof', function() {
    return {
      restrict: 'E',
      scope: {},
      controller: ['$scope', function($scope) {
        this.message = "Hello world"
      }],
      templateUrl: 'components/woof/woof.template.html'
    }
  });