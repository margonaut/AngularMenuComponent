'use strict';

angular.
  module('myButton').
  directive('myButton', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        options: '=options'
      },
      controller: ['$scope', function($scope) {
        var help = "help";
        this.what = "Hello world";
        // $scope.message = "lolz";
      }],
      templateUrl: 'components/my-button/my-button.template.html'
    }
  });