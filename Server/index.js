const express = require('express')
const mongoose = require('mongoose')
const next = require('next')
const bodyParser = require('body-parser')
const { DATABASE_URL, DEV } = require('./config')
const nextApp = next({ DEV })
const handle = nextApp.getRequestHandler()
const RedirectRouter = require('../Routes/redirect')

nextApp.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(RedirectRouter)

  server.get('*', (req, res) => handle(req,res))

  mongoose.connect(DATABASE_URL, {useNewUrlParser: true})

  server.use('/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

  server.listen(1337, console.log('Listening on port 1337'))
})