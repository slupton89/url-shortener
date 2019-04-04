const express = require('express')

const RedirectRouter = express.Router()

RedirectRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.send('ID: ' + id)

  // lookup id.redirectUrl
  // return redirect
})

RedirectRouter.post('/', (req, res, next) => {
  const url = req.query.url
  res.send('URL: ' + url)

  // create with url
  // return id
})

module.exports = RedirectRouter