/* From github
var filter = require("./filter_module");

var dirname = process.argv[2];
var ext = process.argv[3];

filter(dirname, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});*/

/*Solution printed on command prompt after evaluation*/
var filterFn = require('./filter_module.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})