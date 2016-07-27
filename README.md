# Angular Menu Directive

### Setup
```sh
npm start
```
Visit http://localhost:8000/

### Description
These menus consist of two composable directives, Menus and Menu Items. The menu directive generates the container structure and controls the visibility of the dropdown content. They take a custom title, can be set to load open or closed, and can be nested.

Menu Items can be used independent of Menus. They conform to their containing element and accept all the same attributes.

Menus and Menu Items are styled fairly unopinionatedly. They will adapt to inherited text styles.

#### Simple Menu Composition:
```sh
<my-menu text="My Mini Blog">
<menu-item text="Bold" helper-text="Cmd+B" ng-click="ctrl.myAction()" class="indented"></menu-item>
<menu-item text="Print" helper-text="Cmd+P" ng-click="ctrl.doThing()" icon="account_circle"></menu-item>
</my-menu>
```

### Menu Item Config Settings

| Attribute     | Description           |
| ------------- |---------------|
| text="My Great Button" | Sets displayed Menu Item title |
| helper-text="Cmd+P"      | Sets helper text displayed on the right of the Menu Item      |
| icon="account_circle"	 | Sets a Menu Item icon based on a Material Icons class name      |
| class="indented" | Indents Menu Item content. Useful for aligning with items Menu Items containing icons      |
| ng-click="ctrl.action()" | Takes a custom function defined within your controller to execute when the Menu Item is clicked      |
| type="checkbox" | Uses an alternate template for the Menu Item with a checkmark that can be toggled on and off      |

### Menu Config Settings

| Attribute     | Description   |
| ------------- |---------------|
| text="My Menu"	 | Sets Menu title, displayed in the generated trigger button      |
| menu-open="true" | Menu is set to open when page is loaded      |
| type="dropdown" | Used to denote nested menus      |
