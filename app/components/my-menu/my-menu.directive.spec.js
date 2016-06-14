
describe('Menu Directive', function() {
  var element, scope;
  
  // Load the wrapper module that contains the menuItem directive
  beforeEach(module('myMenu'));
  
  beforeEach(module('templates'));

  
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    
    element = '<my-menu text="Flamingos"><menu-item text="Bold" helper-text="Cmd+B"></menu-item></my-menu>';
    openMenu = '<my-menu menu-open=true text="Flamingos"><menu-item text="Bold" helper-text="Cmd+B"></menu-item></my-menu>';
    
    element = $compile(element)(scope);
    openMenu = $compile(openMenu)(scope);
    scope.$digest();
    
  }))
  
  describe('Menu Directive', function() {
    
    it("should be a my-menu element", function() {
      expect(element[0].tagName).toBe("my-mENU");
    });
  });
    
    it("should contain only two child elements", function() {
      expect(element[0].childElementCount).toBe(2);
    });
    
    it("should generate a trigger button as the first child", function() {
      expect(element.children()[0].tagName).toBe("BUTTON");
      expect(element.children()[0].classList).toContain("trigger-button");
    });
    
    it("should display specified text in trigger button", function() {
      var button = element.children()[0]
      
      expect(element.attr('text')).toBe("Flamingos");
      expect(button.innerText).toBe("Flamingos")
    });
    
    it("should generate a menu-content wrapper as the second child", function() {
      expect(element.children()[1].tagName).toBe("my-mENU-CONTENT");
    });
    // 
    it("should contain any transcluded menu items within menu-content", function() {
      var menuContent = element.children()[1];
      var transcludeWrapper = menuContent.children[0];
      var menuItem = transcludeWrapper.children[0];
      
      expect(menuContent.childElementCount).toBe(1);
      expect(transcludeWrapper.tagName).toBe("NG-TRANSCLUDE");
      expect(menuItem.tagName).toBe("MENU-ITEM");
      
    });
    
    it("should be closed by default", function() {
      var button = element.find('button');
      var menuContent = element.find('my-menu-content');
      
      expect(menuContent.attr('menu-open')).toBe('')
      
    });
    
    it("should open and close when clicked", function() {
      var button = element.children()[0];
      var menuContent = element.find('my-menu-content');
      
      expect(menuContent.attr('menu-open')).toBe('')
      
      button.click()
      
      expect(menuContent.attr('menu-open')).toBe('true')
      
      button.click()
      
      expect(menuContent.attr('menu-open')).toBe('false')
    });
    
    it("should be closed by open on default when specified", function() {
      var button = openMenu.find('button');
      var menuContent = openMenu.find('my-menu-content');
      
      expect(menuContent.attr('menu-open')).toBe('true')
      
    });

});