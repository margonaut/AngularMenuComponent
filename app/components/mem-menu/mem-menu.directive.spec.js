// can't find template file, fix later

// // 'use strict';
// 
// describe('memMenu directive', function() {
//   var element, scope;
//   
//   // Load the wrapper module that contains the menuItem directive
//   beforeEach(module('memMenu'));
//   
//   beforeEach(module('templates'));
// 
//   
//   beforeEach(inject(function($rootScope, $compile) {
//     scope = $rootScope.$new();
//     
//     element = '<mem-menu><menu-item text="Bold" helper-text="Cmd+B"></menu-item></mem-menu>';
//     
//     element = $compile(element)(scope);
//     scope.$digest();
//     
//   }))
//   
//   describe('memMenu directive', function() {
//     
//     it("should be a mem-menu element", function() {
//       expect(element[0].tagName).toBe("MEM-MENU");
//     });
//   });
// });