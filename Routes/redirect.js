const express = require('express')
const { Url } = require('../Models/Url')
const RedirectRouter = express.Router()

RedirectRouter.get('/:id', (req, res) => {
  Url.findById(req.params.id)
  .then(url => {
    console.log(url.redirectUrl)
  })
  .catch(err => {
    console.error(err)
    res.status.json({ message: 'Internal server error' })
  })
})

RedirectRouter.post('/', (req, res) => {
  Url.create({
    redirectUrl: req.body.url
  })
  .then(url => res.status(201).json(url.serialize()))
  .catch(err => {
    console.error(err)
    res.status(500).json({ message: 'Internal server error' })
  })
})

RedirectRouter.delete('/:id', (req, res) => {
  Url.findByIdAndRemove(req.query.id)
    .then(url => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Internal server error' }))
})

module.exports = RedirectRouter