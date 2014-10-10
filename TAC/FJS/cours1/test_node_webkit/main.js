var fs = require('fs');
var gui = require('nw.gui');

var menu = new gui.Menu({ type: 'menubar' });
  //menu.createMacBuiltin("John test");

  menu.append(new gui.MenuItem({
    label: 'File',
    submenu: new gui.Menu()
  }));
  menu.items[0].submenu.append(new gui.MenuItem({
  	label: 'New',
  	click: function () {
  		gui.Window.open('index.html');
  	}
  }));
  menu.items[0].submenu.append(new gui.MenuItem({
  	type: 'separator'
  }));
  menu.items[0].submenu.append(new gui.MenuItem({
  	label: 'Close',
  	click: function () {
  		gui.Window.get().close();
  	}
  }));
menu.append(new gui.MenuItem({
  label: 'Edit',
  submenu: new gui.Menu()
}));
menu.items[1].submenu.append(new gui.MenuItem({
  label: 'Copy',
  click: function () {}
}));
menu.items[1].submenu.append(new gui.MenuItem({
  label: 'Paste',
  click: function () {}
}));
menu.items[1].submenu.append(new gui.MenuItem({
  type: 'separator'
}));
menu.items[1].submenu.append(new gui.MenuItem({
  label: 'Search',
  click: function () {}
}));
menu.items[1].submenu.append(new gui.MenuItem({
  label: 'Indent',
  click: function () {}
}));


  gui.Window.get().menu = menu;
/*
fs.readFile('./package.json', 'utf-8', function (error, contents) {
	document.write(contents);
});
*/
