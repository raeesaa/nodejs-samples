var http = require("http");
var url = process.argv[2];
var all_data="";

http.get(url, function(res){
	res.setEncoding('utf8');
	res.on('data', function(data){
		all_data += data;
	});
	res.on('end', function(){
		console.log(all_data.length);
		console.log(all_data);
	});
	res.on('error', console.error);
}).on('error', function(e) {
  		console.log("Got error: " + e.message);
});