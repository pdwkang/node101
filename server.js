var http = require('http');
// console.log(http)


var server = http.createServer((req, res)=>{
	// request is from browser // response is from server

	res.writeHead(200,{'content-type' : 'text/html'});
	res.write('<h1>res.write("awfawef").</h1>')
	res.end('<h1>Hello, Friend. This is YOUR node server.</h1>');
})

var port = 8000
console.log("Server listening on port " + port + " for connections...");
server.listen(port);
