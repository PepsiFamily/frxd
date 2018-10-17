var express = require('express');
const path = require("path");
const app = express();
const port = 80;

app.use(express.static('js'));
app.use(express.static('css'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/sites/chat.html');
});

app.listen(port, () => console.log(`App running on port ${port}.`));