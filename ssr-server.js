const express = require('express')
const mongoose = require('mongoose')
const next = require('next')
const bodyParser = require('body-parser')
const { DATABASE_URL, PORT } = require('./config')
const app = next(process.env.NODE_DEV !== 'production')
const handle = app.getRequestHandler()
const RedirectRouter = require('./Routes/redirect')

console.log(DATABASE_URL)
app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(RedirectRouter)

  server.get('*', (req, res) => {
    return handle(req,res)
  })

  mongoose.connect(DATABASE_URL, {useNewUrlParser: true})

  server.use('*', (req, res) => res.status(404).json({ message: 'Not Found' }))

  server.listen(PORT, console.log('Listening on port 1337'))
})