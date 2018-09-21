const http = require("http");
const url = require('url');

function start(route, handle) {
    http.createServer(function(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + 'received.');

        route(handle, pathname);

        response.writeHead(200, { "Content-type": "text/plain" });
        response.write("Hello World");
        response.end();
    }).listen(8765);
}

exports.start = start;