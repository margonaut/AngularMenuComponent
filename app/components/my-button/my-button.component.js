'use strict';

angular.
  module('myButton').
  directive('myButton', function() {
    return {
      restrict: 'E',
      // transclude: true,
      scope: {
        options: '=options'
      },
      controller: ['$scope', function($scope) {
        // $scope.help = "helpmeeee"; works with {{ help }}
        // this.what = "Hello world"; works with {{ ctrl.what }}
      }],
      controllerAs: 'ctrl',
      templateUrl: 'components/my-button/my-button.template.html'
    }
  });