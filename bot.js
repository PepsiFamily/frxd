const WebSocket = require("ws");

const socket = new WebSocket("ws://w-bot.ml:3434");

const id = +new Date + '.' + Math.random();

socket.onmessage = function(message) {
    message = JSON.parse(message.data);

    if(message.id === id) return;

    if(message.message === "!hello") {
        socket.send(JSON.stringify({
            id: id,
            name: 'Putin-BOT',
            message:'Hello there ' + message.name
        }));
    } else {
        if (message.message.startsWith("!say ")) {
            message.message = message.message.slice(5);
            socket.send(JSON.stringify({
                id: id,
                name: 'Putin-BOT',
                message: message.message
            }));
        }
    }
}