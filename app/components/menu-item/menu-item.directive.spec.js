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
  
  describe('menuItem directive', function() {
    
    it("should be a menu-item element", function() {
      
      expect(element[0].tagName).toBe("MENU-ITEM");
      
    });

    it("should have a single button child element for a simple menuItem", function() {
      
      var childElements = element.children();
      
      expect(childElements.length).toBe(1);
      expect(childElements[0].tagName).toBe("BUTTON");
            // expect(element.attr('text')).toBe("Bold");
    })
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