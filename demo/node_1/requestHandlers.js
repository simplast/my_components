let exec = require('child_process').exec;

function start() {
    // var body =
    //     "<html>" +
    //     "<head>" +
    //     '<meta http-equiv="Content-Type" content="text/html; ' +
    //     'charset=UTF-8" />' +
    //     "</head>" +
    //     "<body>" +
    //     '<form action="/upload" method="post">' +
    //     '<textarea name="text" rows="20" cols="60"></textarea>' +
    //     '<input type="submit" value="Submit text" />' +
    //     "</form>" +
    //     "</body>" +
    //     "</html>";
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);
    // return body;
    let content = 'content is empty';
    console.log('Request handler "start" was called');
    exec('find/', function (error, stdout, stderr) {  
        content = stdout;
    })
    return content
}
function upload() {
    return 'Request handler "upload" was called.';
}

exports.start = start;
exports.upload = upload;
