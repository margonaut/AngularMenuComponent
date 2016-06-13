'use strict';

angular.
  module('menuItem').
  directive('menuItem', function() {
    return {
      // replace: true,
      restrict: 'E',
      scope: {
        text: '@',
        helperText: '@',
        type: '@',
        icon: '@'
      },
      templateUrl: function(elem, attrs) {
        var itemType = attrs.type;
        var baseUrl = 'components/menu-item/menu-item.';
        return itemType ? baseUrl + itemType + '-' + 'template.html' : baseUrl + 'template.html'
       },
      controller: ['$scope', function($scope, $element, $attrs) {
        
        // trying out selection action pattern
        $scope.selected = function($event, scope) {
          // On click trigger this selection function
          
          $scope.emit('menu-item-selected', scope);
          
          // maybe we can set custom actions here?
          // or at least this is where we can call them
        };
      }],
      link: function(scope, iElement, iAttrs) {
        
        // this is where the pattern sets menu items to be disabled
        // I might not want that functionality
      },
      controllerAs: 'ctrl'
    }
  });