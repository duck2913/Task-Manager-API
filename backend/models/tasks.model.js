const db = require("../utils/database")

class Tasks {
	static async getTasks() {
		return await db.any("select * from tasks")
	}

	static async addNewTask(name) {
		return await db.any("insert into tasks(name) values($1)", name)
	}

	static async updateTask(taskId, newName, completed) {
		const status = completed === "false"
		if (newName) {
			return await db.any(
				`update tasks
					set name = $1, completed = $2
					where id = $3`,
				[newName, status, taskId],
			)
		} else {
			return await db.any(
				`update tasks
					set completed = $1
					where id = $2`,
				[status, taskId],
			)
		}
	}

	static async deleteTask(taskId) {
		return await db.any("delete from tasks where id  = $1", taskId)
	}
}

module.exports = Tasks
