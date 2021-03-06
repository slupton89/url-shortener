const express = require('express')
const { Url } = require('../Models/Url')
const _ = require('lodash')
const RedirectRouter = express.Router()

RedirectRouter.get('/:id', (req, res, next) => {
  Url.findOne({ short: req.params.id })
  .then(url => {
    url !== null ? res.redirect(url.redirectUrl) : next()
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
      short: _.sampleSize('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', 5).join(''),
      redirectUrl: newUrl
    })
    .then(url => {
      res.send(url.short)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Internal server error' })
    })
  } else {
    res.status(500).json({ message: 'Internal server error' })
  }
})

RedirectRouter.delete('/:id', (req, res) => {
  Url.findOneAndDelete({ short: req.params.id })
    .then(url => res.status(204).end())
    .catch(err => res.status(500).json({ message: 'Internal server error' }))
})

module.exports = RedirectRouter