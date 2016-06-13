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
    });
    
    it("should display the text attribute value in the button child", function() {
      var childElements = element.children();
      var button = childElements[0];

      expect(button.textContent).toContain("Bold");
      
    });
    
    it("should display the helper-text attribute value in the button child", function() {
      var childElements = element.children();
      var button = childElements[0];

      expect(button.textContent).toContain("Cmd+B");
      
    });
  });
});