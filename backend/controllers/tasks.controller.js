const db = require("../utils/database");

const getTasks = async (_, res) => {
	const tasks = await db.any("select * from tasks");
	res.json(tasks);
};

module.exports = {
	getTasks,
};
