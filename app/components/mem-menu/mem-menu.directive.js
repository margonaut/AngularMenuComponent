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
        type: '@',
        menuOpen: '@'
      },
      transclude: true,
      controller: ['$scope', function($scope, $elements, $attrs) {
        
        this.menuOpen = $scope.menuOpen;
        
        this.toggleMenu = function() {
        this.menuOpen = !this.menuOpen;
        }
        
      }],
      controllerAs: 'ctrl'
    };
  });