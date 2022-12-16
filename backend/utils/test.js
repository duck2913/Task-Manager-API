const db = require("./database")

async function execute() {
	const res = await db.any("select * from test")
	console.log(res)
}

execute()
