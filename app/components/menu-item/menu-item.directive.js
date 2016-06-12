'use strict';

angular.
  module('menuItem').
  directive('menuItem', function() {
    return {
      templateUrl: 'components/menu-item/menu-item.template.html',
      replace: true,
      restrict: 'E',
      scope: {
        text: '@',
        url: '@'
      },
      controller: ['$scope']
    }
  });