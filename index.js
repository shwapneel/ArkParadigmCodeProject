var app = require ('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*var server = app.listen(3000, function(){
   console.log('test123');
})*/

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    //console.log('a user is connected');
    socket.on('disconnect', function(){
      console.console.log('user disconnected');
    });
});

http.listen(3420,function(){
    console.log('Listening on *3420');
});
