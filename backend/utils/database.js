const pgp = require("pg-promise")()

const url = "postgres://jjvfltnl:6jz_506PoCUo_OgDLlItKJ_6bSOf6YhU@tiny.db.elephantsql.com/jjvfltnl"

const db = pgp(url)

module.exports = db
