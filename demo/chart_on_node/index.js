var http = require("http");
var fs = require("fs");
var extractFilePath = require("./extract");

var handleError = function(res) {
    fs.readFile("app/err.html", function(err, data) {
        res.end(data);
    });
};

var server = http.createServer(function(req, res) {
    console.log("Response to a request.");
    var url = req.url;
    fs.readFile(extractFilePath(url), function(err, data) {
        if (err) {
            handleError(res);
        } else {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
});
server.listen(3000);
