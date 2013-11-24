var http = require("http");
var all_data="";

for(i = 2 ; i < 6; i++)
{
	var url = process.argv[i];
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

	
}

