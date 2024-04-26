const express = require("express")
const server = express()
const jokesRouter = require("./api/jokesRouter.js")

server.use(express.json())
server.use("/jokes", jokesRouter)

module.exports = server