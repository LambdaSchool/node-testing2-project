const express = require('express');
const server = express();
const bandsRouter = require('./bands/bands-router');

server.use(express.json());
server.use('/api/bands', bandsRouter);

server.get('/', (req, res) => {
  res.send('The API is working!');
});

module.exports = server;
