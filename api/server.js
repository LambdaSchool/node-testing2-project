const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('The API is working!')
})

module.exports = server