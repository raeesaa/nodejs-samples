/* My code
var fs = require("fs");

fs.readdir(process.argv[2], function(err, files)
	{
		if(err)
			throw err;
		else
		{
			for (var i = 0; i < files.length; i++) {
				var ext = files[i].split('.').pop();

				if(ext == process.argv[3])
				{
					console.log(files[i]);
				}
			};
		}
	});
*/

//Code from learnyounode
var fs = require('fs')
var regex = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
    if (regex.test(file))
      console.log(file)
  })
})