/*
  Global package installer, installs anything in list.json globally.
*/

var installer = require('package-script');
var list = require('./list.json').packages;
var script = [];
var len =  list.length;

for(var i = 0; i < len; i++) {
  var packageComponent = {
    command: "npm",
    args: ["install", "-g", list[i]]
  };
  script.push(packageComponent);
}

installer.spawn(script);
