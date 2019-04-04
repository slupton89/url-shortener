const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
  id: { type: String, required: true },
  redirectUrl: { type: String, required: true }
})

urlSchema.methods.serialize = () => {
  return {
    id: this._id,
    urlRedirect: this.urlRedirect
  }
}

const Url = mongoose.model("Url", urlSchema)

module.exports = { Url }