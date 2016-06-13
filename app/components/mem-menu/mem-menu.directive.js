'use strict';

angular.
  module('memMenu').
  directive('memMenu', function() {
    return {
      templateUrl: 'components/mem-menu/mem-menu.template.html',
      restrict: 'E',
      // scope: {
      //   
      // },
      // replace: true,
      transclude: true,
      compile: function(tElement, attrs, transclude) {
        return function($scope) {
          transclude($scope, function(clone) {
            tElement.append(clone);
          })
        };
      },
      controller: ['$scope', function($scope, $elements, $attrs) {
        var findMenu = function(event) {
          return event.target.nextElementSibling;
        };
        
        this.toggleMenu = function(event) {
          var menu = findMenu(event);
          menu.classList.toggle('menu-open')
        }
        
      }],
      controllerAs: 'ctrl'
    };
  });