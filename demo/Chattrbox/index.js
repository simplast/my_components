let http = require("http");
let fs = require("fs");
let extract = require("./extract");

const proxy = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(extract(req.url), function(err, data) {
        res.end(data);
    });
});
proxy.listen(3456);
