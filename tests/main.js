const Window = require('window');
const window = new Window();

eval(require('fs').readFileSync('scripts/datastore.js', 'utf8'));
eval(require('fs').readFileSync('scripts/truck.js', 'utf8'));
eval(require('fs').readFileSync('scripts/main.js', 'utf8'));

eval(require('fs').readFileSync('tests/test_datastore.js', 'utf8'));
eval(require('fs').readFileSync('tests/test_truck.js', 'utf8'));

/*
var fs = requiire("fs");
eval(fs.readFileSync("../scripts/datastore.js"));
 */
