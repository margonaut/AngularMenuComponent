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

      }],
      link: function(scope, iElement, iAttrs) {

      },
      controllerAs: 'ctrl'
    }
  });