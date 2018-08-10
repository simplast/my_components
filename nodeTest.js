// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected() {
//     console.log("链接成功。");
//     eventEmitter.emit("data_received");
// };

// eventEmitter.on("connection", connectHandler);

// eventEmitter.on("data_received", function () {
//     console.log("数据链接成功！")
// })

// eventEmitter.emit("connection");
// console.log("程序执行完毕。");

// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//         console.log(err.stack);
//         return;
//     }
//     console.log(data.toString());
// });
// console.log("程序执行完毕");
var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {  
    console.log("监听器listener1执行。");
}
var listener2 = function listener2() {  
    console.log("监听器listener2执行。");
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners + "个监听器监听连接事件");
eventEmitter.emit("connection");
eventEmitter.removeListener("connection",listener1);
console.log("listener1不再受监听。");
eventEmitter.emit("connection");
eventListeners = events.EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners+"个监听器监听连接事件。");
console.log("执行完毕");


eventEmitter.on("error",function () {  
    console.log("there is an error!")
});
eventEmitter.emit("error");