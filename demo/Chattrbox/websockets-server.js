let WebSocket = require("ws");

let WebSocketServer = WebSocket.Server;
let port = 3001;
let ws = new WebSocket("http://localhost:3001");
let messages = [];

console.log("websockets server started");
ws.on("connection", function(socket) {
    console.log("client connection established");
    var verify = 0;

    socket.on("message", function(data) {
        console.log("message received:" + data);
        if (data === "1234569" && verify === 0) {
            socket.verify = 1;
            messages.forEach(function(msg) {
                socket.send(msg);
            });
        }
        if (socket.verify === 1) {
            messages.push(data);
            messages.push(data);
            ws.clients.forEach(function(clientSocket) {
                clientSocket.send(data);
                clientSocket.send(data);
            });
        }
    });
});
