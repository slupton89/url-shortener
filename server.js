const express = require('express')
const http = require('http')

const server = express()

server.get('/', (req, res, next) => {
  res.send('Working').status(204)
})

server.listen(1337, console.log('Listening on port 1337'))