const express = require('express')
const server = express();
const friendsRouter = require('./friends/friends-router')

server.use(express.json())
server.use('/api/friends', friendsRouter)

server.get('/', (req, res) => {
  res.json({ api: 'running'})
})

module.exports = server