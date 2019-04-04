const express = require('express')
const { Url } = require('../Models/Url')
const RedirectRouter = express.Router()

RedirectRouter.get('/:id', (req, res, next) => {
  const id = req.params.id
  res.send('ID: ' + id)

  // lookup id.redirectUrl
  // return redirect
})

RedirectRouter.post('/', (req, res, next) => {
  const url = req.query.url
  Url.find(url)
    .then(url => {
      console.log(url)
    })
    .catch(err => {
      console.error(err)
      res.status.json({ message: 'Internal server error' })
    })
})

module.exports = RedirectRouter