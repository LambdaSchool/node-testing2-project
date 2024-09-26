const server = require('./api/server')
const PORT = process.env.NODE_ENV || 5000

server.listen(PORT, ()=> {console.log(`server on port ${PORT}`)})