'use strict';

angular.
  module('memMenu').
  directive('memMenu', function() {
    return {
      templateUrl: 'components/mem-menu/mem-menu.template.html',
      restrict: 'E',
      scope: {
        itemAction: '&'
      },
      transclude: true,
      controller: ['$scope', function($scope, $elements, $attrs) {
        // bad area for dom manipulation, good for sharing scope
        
        var test = function() {
          debugger;
        }
        
        
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