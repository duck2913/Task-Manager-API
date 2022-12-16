const pgp = require("pg-promise")()

const url = "postgresql://postgres:5MLDo7Yb2Aso4xAgRWTm@containers-us-west-180.railway.app:6900/railway"

const db = pgp(url)

module.exports = db
