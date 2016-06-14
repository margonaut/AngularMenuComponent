// can't find template file, fix later

// 'use strict';

describe('memMenu directive', function() {
  var element, scope;
  
  // Load the wrapper module that contains the menuItem directive
  beforeEach(module('memMenu'));
  
  beforeEach(module('templates'));

  
  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();
    
    element = '<mem-menu><menu-item text="Bold" helper-text="Cmd+B"></menu-item></mem-menu>';
    
    element = $compile(element)(scope);
    scope.$digest();
    
  }))
  
  describe('memMenu directive', function() {
    
    it("should be a mem-menu element", function() {
      expect(element[0].tagName).toBe("MEM-MENU");
    });
  });
  
  // describe('memMenu directive', function() {
  //   
  //   it("should have an initial value of closed", function() {
  //     expect(scope.menuOpen).to
  //     debugger;
  //   });
  // });
  
  // should be  closed by default
  // shoul be open by default when set
  // should generate a target button
  // target button should display text
  // should contain a menu-content
});