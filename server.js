const express = require('express')
const mongoose = require('mongoose')
const RedirectRouter = require('./Routes/redirect')

const server = express()

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

server.use(RedirectRouter)

server.get('/', (req, res, next) => {
  res.send('Working').status(204)
})


server.listen(1337, console.log('Listening on port 1337'))