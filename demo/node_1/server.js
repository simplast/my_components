let http = require("http");
let url = require('url');

function start(route, handle) {
    http.createServer(function(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + 'received.');

        var content = route(handle, pathname);

        response.writeHead(200, { "Content-type": "text/plain" });
        response.write(content);
        response.end();
    }).listen(8765);
}

exports.start = start;