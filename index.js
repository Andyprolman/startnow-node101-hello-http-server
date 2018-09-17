// write your code here
var http = require('http');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Hello World');
    response.end()
    console.log('listening on 8080');
})
.listen(8080);
