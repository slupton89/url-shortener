exports.DATABASE_URL = precess.env.DATABASE_URL || "mongodb://localhost/url-db"
exports.TEST_DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost/test-url-db"