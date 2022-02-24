const express = require('express');
const Shoungs = require('./shoungs/shoung-model');
const shoungRouter = require('./shoungs/shoung-router');

const server = express();
server.use(express.json());

server.use('/api/shoungs', shoungRouter);

server.use('*', (req, res) => {
    res.json({ api: 'up' })
})

server.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the router',
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;