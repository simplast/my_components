function start() {  
    console.log('Request handler "start" was called.');

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
        '</html>';
    
}
function upload() {  
    console.log('Request handler "upload" was called.');
}

exports.start = start;
exports.upload = upload;
