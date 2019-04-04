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

RedirectRouter.post('/submit', (req, res) => {
  if(req.body.url) {
    const newUrl = req.body.url
    Url.create({
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
      redirectUrl: newUrl
    })
    .then(url => res.status(201).json(url.serialize()))
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Internal server error' })
    })
  } else {
    res.status(500).json({ message: 'Internal server error' })
  }
})

RedirectRouter.delete('/:id', (req, res) => {
  Url.findByIdAndRemove(req.query.id)
    .then(url => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Internal server error' }))
})

module.exports = RedirectRouter