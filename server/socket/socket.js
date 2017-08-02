var io = require('socket.io')(6657);

io.on('connection', function (socket) {
  socket.on('message', function () { });
  socket.on('disconnect', function () { });
});