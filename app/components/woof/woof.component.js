'use strict';

angular.
  module('woof').
  directive('woof', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        info: '=info'
      },
      controller: ['$scope', function($scope) {
        var help = "help";
        this.what = "Hello world";
        $scope.message = "lolz";
      }],
      templateUrl: 'components/woof/woof.template.html'
    }
  });