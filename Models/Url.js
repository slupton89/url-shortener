const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
  short: { type: String, required: true },
  redirectUrl: { type: String, required: true }
})

urlSchema.methods.serialize = () => {
  return {
    short: this.short,
    redirectUrl: this.redirectUrl
  }
}

const Url = mongoose.model("Url", urlSchema)

module.exports = { Url }