'use strict';

describe('menuItem directive', function() {
  
  var $compile, $rootScope, $scope, $element, element, $event;
  // Load the wrapper module that contains the menuItem directive
  beforeEach(module('menuItem'));
  
  // Grab environment and angular utilities
  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));
  
  var testItem = '<menu-item text="Bold" helper-text="Cmd+B" ng-click="menu.boldText($event)"></menu-item>'
  
  // Insert our HTML and compile the directive
  function CompileDirective(directiveHtml) {
    if(!directiveHtml) directiveHtml = testItem;
    inject(function($compile) {
      $element = $compile(directiveHtml)($scope);
      $scope.$digest();
      element = $element.html();
    })
  }
  
  describe('menuItem', function() {
    var scope;
    beforeEach(function() {
      $log(scope)
      scope = $element.data('$scope').$$childHead;
      // $event = $.Event("click");
    });
    
    it('should display the text attribute', function() {
      expect(element).toContain("Bold");
    })
  })
});