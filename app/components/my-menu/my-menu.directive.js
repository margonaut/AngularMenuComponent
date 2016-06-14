'use strict';

angular.
  module('myMenu').
  directive('myMenu', function() {
    return {
      templateUrl: 'components/my-menu/my-menu.template.html',
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
          if(!$scope.type) {
            this.menuOpen = !this.menuOpen;
          }
        }    
      }],
      controllerAs: 'ctrl'
    };
  });