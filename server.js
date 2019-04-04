const express = require('express')
const mongoose = require('mongoose')
const { DATABASE_URL } = require('./config')
const RedirectRouter = require('./Routes/redirect')

// create server
const server = express()

// parse req body
server.use(express.json())

// use redirect router
server.use(RedirectRouter)

const urls = [
  {
    id: '123',
    redirectURL: 'https://github.com'
  },
  {
    id: '456',
    redirectURL: 'https://dev.to'
  }
]

// connect to db
mongoose.connect(DATABASE_URL, {useNewUrlParser: true})

// custom 404 for any unused endpoint
server.use('*', (req, res) => res.status(404).json({ message: 'Not Found' }))

// connect server
server.listen(1337, console.log('Listening on port 1337'))