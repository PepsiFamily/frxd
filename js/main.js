let socket = new WebSocket('ws://w-bot.ml:3434');
let id = new Date() + '.' + Math.random();

socket.onmessage = function(message) {
    message = JSON.parse(message.data);

    if (message.id === id) return;
    let date = new Date()
    let timestamp = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    $('.chats').append(`<div class="text"><a class="timestamp">${timestamp}</a> ${message.name}: ${message.message}</div>`);
    $('.chats').animate({scrollTop: $('#chats').prop("scrollHeight")}, 10);
}

var send = function (e) {
    if (e && e.keyCode !== 13) return;
    var name = $('#name').val();
    var message = $('#message').val();
    if (message === '') return
    socket.send(JSON.stringify({
        id: id,
        name: name,
        message: message
    }));

    $('#message').val('');

    let date = new Date()
    let timestamp = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    $('.chats').append(`<div class="text"><a class="timestamp">${timestamp}</a> ${name}: ${message}</div>`);
    $('.chats').animate({scrollTop: $('#chats').prop("scrollHeight")}, 10);
}