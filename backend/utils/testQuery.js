const db = require("./database");

async function execute() {
	const result = await db.any(`select * from tasks`);
	// const result = await db.any(`insert into tasks(name) values($1)`, "do coding challenge");
	console.table(result);
}

execute();
