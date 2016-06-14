// 'use strict';

describe('menuItem directive', function() {
  var element, scope;
  
  // Load the wrapper module that contains the menuItem directive
  beforeEach(module('menuItem'));
  
  beforeEach(module('templates'));

  
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    
    element = '<menu-item text="Bold" helper-text="Cmd+B"></menu-item>';
    iconItem = '<menu-item icon="refresh" text="Bold" helper-text="Cmd+B"></menu-item>';
    toggleItem = '<menu-item type="checkbox" text="Bold" helper-text="Cmd+B"></menu-item>';
    
    element = $compile(element)(scope);
    iconItem = $compile(iconItem)(scope);
    toggleItem = $compile(toggleItem)(scope);
    scope.$digest();
    controller = element.controller;
    
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
      
      var itemChildren = iconItem.children();
      
      expect(itemChildren.length).toBe(2);
      
      var icon = itemChildren[0];
      
      expect(icon.tagName).toBe("I");
      expect(icon.className).toContain('material-icons', 'refresh');
      
    });
    
    it("should toggle checkbox type menu items on and off", function() {
      
      var item = toggleItem;
      var button = item.children(0)[0];
      
      // Expect to contain the checkmark
      expect(item[0].childElementCount).toBe(1);
      expect(button.childElementCount).toBe(2);
      expect(button.children[1].className).toContain('menu-checkmark', 'material-icons');
      
      button.click()
      
      // Expect to lose the checkmark after click event
      expect(button.childElementCount).toBe(1);
      
    });
    
    // it("should test controller", function() {
    //   
    //   expect(scope.test).toBe(true)
    //   
    // });
    
    // it should trigger a click action if one is set - how to do this in angular
  });
});