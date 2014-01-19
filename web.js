var express = require('express');
var tail = require('tail').Tail;
var socket = require('socket.io');

var app = express();

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static('public'));
app.use(express.errorHandler());

var port = process.env.PORT || 5000;
var server = app.listen(port, function() {
  console.log("Listening on " + port);
});
var io = socket.listen(server);


io.sockets.on('connection', function (socket) {});

logFile = new tail("logs.txt");

logFile.on("line", function(data) {
  io.sockets.emit('line', data);
});

