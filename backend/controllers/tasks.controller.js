const Task = require("../models/tasks.model")

const getTasks = async (_, res) => {
	const tasks = await Task.getTasks()
	if (!tasks) {
		res.status(200).json("Can not get all tasks, please try again later")
	}
	res.json(tasks)
}

const addTask = async (req, res, next) => {
	try {
		const taskName = req.body.name
		console.log("🚀 -> file: tasks.controller.js:14 -> addTask -> req.body", req.body)
		const resp = await Task.addNewTask(taskName)
		console.log(resp)
		res.json("insert successfully")
	} catch (err) {
		res.status(500).json("insert failed! Please try again later")
		next(err)
	}
}

const updateTask = async (req, res, next) => {
	try {
		const taskId = req.params.taskId
		const { newName, completed } = req.body
		console.log("🚀 -> file: tasks.controller.js:28 -> updateTask -> newName, completed", newName, completed)
		await Task.updateTask(taskId, newName, completed)
		res.json("Update successfully")
	} catch (error) {
		res.json("update failed")
		next(error)
	}
}

const deleteTask = async (req, res, next) => {
	try {
		const { taskId } = req.params
		await Task.deleteTask(taskId)
		res.json("delete successfully")
	} catch (error) {
		res.json("delete fail")
		next(error)
	}
}

module.exports = {
	getTasks,
	addTask,
	updateTask,
	deleteTask,
}
