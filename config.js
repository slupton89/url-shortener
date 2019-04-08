require('dotenv').config()

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost/url-db',
  PORT: process.env.PORT
}