const express = require('express')
const characterRouter = require('./characters/character-router')
const server = express()

server.use(express.json())
server.use('/api/character', characterRouter)
server.use((req, res, next, err ) => {
   res.status(500).json({
     message: err.message,
      stack: err.stack
})
})
module.exports = server