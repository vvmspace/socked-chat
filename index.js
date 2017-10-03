var app = require('express')();
var http = require('http').Server(app);
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});
app.get('/stop', function(req,res){
    res.send('Exiting');
    console.log('Exiting');
    process.exit();
});
http.listen(5000, function(){
    console.log('listening on *:5000');
});