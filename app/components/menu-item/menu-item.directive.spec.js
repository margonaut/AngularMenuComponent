// 'use strict';

describe('menuItem directive', function() {
  var element, scope;
  
  // Load the wrapper module that contains the menuItem directive
  beforeEach(module('menuItem'));
  
  beforeEach(module('templates'));

  
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    
    element = '<menu-item text="Bold" helper-text="Cmd+B"></menu-item>';
    iconElement = '<menu-item icon="refresh" text="Bold" helper-text="Cmd+B"></menu-item>';
    
    element = $compile(element)(scope);
    iconElement = $compile(iconElement)(scope);
    scope.$digest();
    
  }))
  
  describe('menuItem directive', function() {
    
    it("should be a menu-item element", function() {
      expect(element[0].tagName).toBe("MENU-ITEM");
    });

    it("should have a single button child element for a simple menuItem", function() {
      
      var itemChildren = element.children();
      
      expect(itemChildren.length).toBe(1);
      expect(itemChildren[0].tagName).toBe("BUTTON");
    });
  
    it("should display the text attribute value in the button child", function() {
      var itemChildren = element.children();
      var button = itemChildren[0];

      expect(button.textContent).toContain("Bold");
      
    });
    
    it("should display the helper-text attribute value in the button child", function() {
      var itemChildren = element.children();
      var button = itemChildren[0];

      expect(button.textContent).toContain("Cmd+B");
      
    });
    
    it("should display an icon if one is set", function() {
      
      var itemChildren = iconElement.children();
      
      expect(itemChildren.length).toBe(2);
      
      var icon = itemChildren[0];
      
      expect(icon.tagName).toBe("I");
      expect(icon.className).toContain('material-icons', 'refresh');
      
    });
    
    // it should trigger a click action if one is set
    // it should toggle on and off
    
  });
});