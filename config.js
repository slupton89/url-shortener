exports.DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost/url-db"
exports.DEV = process.env.NODE_DEV !== 'production'