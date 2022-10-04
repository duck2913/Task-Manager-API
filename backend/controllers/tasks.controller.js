const db = require("../utils/database");

const getTasks = async (_, res) => {
	const tasks = await db.any("select * from tasks order by id asc");
	res.json(tasks);
};

const addTask = async (req, res, next) => {
	try {
		const taskName = req.body.name;
		await db.any("insert into tasks(name) values($1)", taskName);
		res.json("insert successfully");
	} catch (err) {
		res.json("insert failed!");
		next(err);
	}
};

const updateTask = async (req, res, next) => {
	try {
		const taskId = req.params.taskId;
		const { newName, completed } = req.body;
		if (newName) {
			await db.any("update tasks set name = $1, completed = $2 where id = $3", [
				newName,
				completed,
				taskId,
			]);
		} else {
			await db.any("update tasks set completed = $1 where id = $2", [
				completed.toString(),
				taskId,
			]);
		}
		res.json("Update successfully");
	} catch (error) {
		res.json("update failed");
		next(error);
	}
};

const deleteTask = async (req, res, next) => {
	try {
		const { taskId } = req.params;
		await db.any("delete from tasks where id = $1", taskId);
		res.json("delete successfully");
	} catch (error) {
		res.json("delete fail");
		next(error);
	}
};

module.exports = {
	getTasks,
	addTask,
	updateTask,
	deleteTask,
};
