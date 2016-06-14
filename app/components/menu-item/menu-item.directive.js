'use strict';

angular.
  module('menuItem').
  directive('menuItem', function() {
    return {
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
      controllerAs: 'ctrl'
    }
  });