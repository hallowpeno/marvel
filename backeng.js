var http = require('http');
var request = require('requests');
var fs = require('fs');

console.log('hello world');

http.createServer(function (req, res) {
	fs.readFile('home.html', function(err, data){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
    res.end();
	})
}).listen(8080);
