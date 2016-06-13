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
      // replace: true,
      transclude: true,
      // compile: function(tElement, attrs, transclude) {
      //   return function($scope) {
      //     transclude($scope, function(clone) {
      //       tElement.append(clone);
      //     })
      //   };
      // },
      link: function(scope, elem, attr, ctrl, transclude) {
        transclude(function(clone) {
          var triggerButton = "<button ng-click='ctrl.toggleMenu($event)'>Let's Go</button>";
          var menuContent = "<mem-menu-content></mem-menu-content>";
          // var menuContentEnd = "</mem-menu-content>"
          // menuContent.append(clone);
          elem.append(triggerButton);
          elem = elem.append(menuContent);
          elem.append(clone);
          // elem.append(menuContent);
          
          // elem.append(clone);
          // debugger;
          // var menuContent.innerHTML = clone;
          // elem.innerHTML = elem.innerHTML + triggerButton + menuContent;
          // elem.append(clone);
          // debugger;
        })
      },
      controller: ['$scope', function($scope, $elements, $attrs) {
        // bad area for dom manipulation, good for sharing scope
        
        var test = function() {
          debugger;
        }
        
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