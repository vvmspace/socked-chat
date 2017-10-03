var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});
app.get('/stop', function(req,res){
    res.send('Exiting');
    console.log('Exiting');
    process.exit();
});
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.broadcast.emit('hi');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});
http.listen(5000, function(){
    console.log('listening on *:5000');
});