window.onload = function() {
 
    var messages = [];
    var socket = io.connect();
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
 
    socket.on('weather', function (data) {
       console.log(data);     
    });
 
}