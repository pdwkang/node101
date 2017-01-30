// Include the http module. its part of core, so no npm install needed
var http = require('http');

function renderHomePage(req, res){
	// someone came to our home page! give the hompage content
	res.writeHead(200, {'content-type':'text/html'});
	res.write('<h1>this the home page</h1>')
	res.write("<p> I'm very proud of my node routing ability. </p>");
	res.write("<p> I made a page in node. so there</p>");
	res.end();

}
// set up an http server and store it in server var
// the callback will run anytime someone hits the port the server is listening to
var server = http.createServer((req, res)=>{
	// this function is run evertime someone makes an HTTP request to the server
	console.log('someone connected to our server!')
	// The url requested is in the req object, url property
	console.log(req.url);
	

	if(req.url ==='/'){
		//cut and put in a function called renderHomePage
		renderHomePage(req, res);
	}else{
		res.writeHead(404, {'content-type':'text/html'});
		res.end('sorry this page does not exist');
	}


	// res.end will close the connection so the browser knows when we are done
	// res.end('Sanity Check')
});

// tell the server we created to listen to port 8001
server.listen(8001);
console.log('Server is listening for HTTP traffic at port 8001...')