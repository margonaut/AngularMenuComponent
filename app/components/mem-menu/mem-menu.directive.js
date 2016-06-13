'use strict';

angular.
  module('memMenu').
  directive('memMenu', function() {
    return {
      templateUrl: 'components/mem-menu/mem-menu.template.html',
      restrict: 'E',
      // replace: true,
      transclude: true,
      compile: function(tElement, attrs, transclude) {
        return function($scope) {
          transclude($scope, function(clone) {
            tElement.append(clone);
          })
        };
      },
      scope: {},
      controller: ['$scope', function($scope, $elements, $attrs) {
        
      }]
    };
  });