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
        
        var menu = this

        this.menuOpen = $scope.menuOpen;
        
        this.toggleMenu = function() {
          this.menuOpen = !this.menuOpen;
          if (this.menuOpen) {
            // document.addEventListener("click", this.listenForClick(menu), true)
          } else {
            // document.removeEventListener("click", this.listenForClick(menu), true)
          }
        }
        
        this.menuOff = function() {
          this.menuOpen = false;
        }
        
        this.listenForClick = function(menu) {
          // debugger;
          document.addEventListener("click", function(){
          // menu.menuOpen = !menu.menuOpen;
          //   
          });
        }
        
      }],
      controllerAs: 'ctrl'
    };
  });