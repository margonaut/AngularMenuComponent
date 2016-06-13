'use strict';

angular.
  module('memMenu').
  directive('memMenu', function() {
    return {
      templateUrl: 'components/mem-menu/mem-menu.template.html',
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: ['$scope', function($scope, $elements, $attrs) {
        
      }]
    };
  });