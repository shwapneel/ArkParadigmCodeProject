var app = require ('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

//send the index.html file to all clients
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

//socket.io creates a connection
io.on('connection',function(socket){
    //when we get a signal that the input JSON command is correct
    socket.on('JSON_INSERT',function(data){
       //send the JSON command to all clients in the Update channel
       io.sockets.emit('JSON_INSERT',data);
       //add the JSON code to the end of the file
       //NOTE: I was not able to get the program to write to a .txt file on time
      // fs.appendFile('JSON.txt', data )
    });

    socket.on('KEY_FIND',function(data){
       //send the value at the key to all clients in the Update channel
       io.sockets.emit('KEY_FIND',data);

    });
});

//use localhost:3420 for this porgram
http.listen(3420,function(){
    console.log('Listening on *3420');
});
