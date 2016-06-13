// 'use strict';

describe('menuItem directive', function() {
  var element, scope;
  
  // Load the wrapper module that contains the menuItem directive
  beforeEach(module('menuItem'));
  
  beforeEach(module('templates'));

  
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    
    element = '<menu-item text="Bold" helper-text="Cmd+B"></menu-item>';
    
    element = $compile(element)(scope);
    scope.$digest();
    
  }))
  
  describe('it should display the text attribue', function() {
    // done();
    expect(element).toBe(3);
  });
  
  // // Insert our HTML and compile the directive
  // function CompileDirective(directiveHtml) {
  //   if(!directiveHtml) directiveHtml = testItem;
  //   inject(function($compile) {
  //     $element = $compile(directiveHtml)($scope);
  //     $scope.$digest();
  //     element = $element.html();
  //   })
  // }
  
  // describe('menuItem', function() {
  //   // var scope;
  //   beforeEach(function() {
  //     
  //     // scope = $element.data('$scope').$$childHead;
  //     // $event = $.Event("click");
  //   });
  //   
  //   it('should display the text attribute', function() {
  //     expect(element).toContain("Bold");
  //   })
  // })
});