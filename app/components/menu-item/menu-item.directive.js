'use strict';

angular.
  module('menuItem').
  directive('menuItem', function() {
    return {
      templateUrl: 'components/menu-item/menu-item.template.html',
      // replace: true,
      restrict: 'E',
      scope: {
        text: '@',
        helperText: '@'
      },
      controller: ['$scope', function($scope, $element, $attrs) {
        
        // Seen in Material Design's execution
        // The sample action function is defined in the directive controller
        // it needs the click event and the title of the text...why?
        // ng-click="ctr.sampleAction(item.text, $event)"
        
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
      }
    }
  });
  
  // route to different template per type setting
  // 