var http = require("http");

http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on('data', function (data) { 
		console.log(data);
	});

	res.on('error', console.error);
	
}).on('error', function(e) {
  		console.log("Got error: " + e.message);
	});

/*
Solution from learn you node printed on command promt
	var http = require('http')

	http.get(process.argv[2], function (response) {
  		response.setEncoding('utf8')
  		response.on('data', console.log)
  		response.on('error', console.error)
	})

*/