'use strict';

angular.
  module('memMenu').
  directive('memMenu', function() {
    return {
      templateUrl: 'components/mem-menu/mem-menu.template.html',
      restrict: 'E',
      scope: {
        itemAction: '&',
        text: '@',
        type: '@'
      },
      transclude: true,
      controller: ['$scope', function($scope, $elements, $attrs) {
        
        this.toggleMenu = function(event) {
          var menu = findMenu(event);          
          menu.classList.toggle('menu-open')
        }
        
        var findMenu = function(event) {
          return event.target.nextElementSibling;
        };
        
      }],
      controllerAs: 'ctrl'
    };
  });