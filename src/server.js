const express = require('express');
const path = require('path');

const app = express();

const HOST = process.env.NODE_HOST || 'localhost';
const PORT = parseInt(process.env.NODE_PORT) || 9000;

app.use(express.static('./build'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT, HOST);
