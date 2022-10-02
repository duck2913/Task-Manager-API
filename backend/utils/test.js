const db = require("./database");

async function execute() {
	const { tasks, results } = await db.task("get-everything", async (t) => {
		const tasks = await t.any("select * from tasks");
		const result = await t.any("update tasks set completed = $1 where id = 21 ", "true");
		return { tasks, result };
	});
	console.table(tasks);
	console.log(results);
}

execute();
