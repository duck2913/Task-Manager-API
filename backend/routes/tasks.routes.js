const express = require("express");
const router = express.Router();

const tasksControllers = require("../controllers/tasks.controller");

router.get("/", tasksControllers.getTasks);

router.post("/", tasksControllers.addTask);

router.put("/:taskId", tasksControllers.updateTask);

router.delete("/:taskId", tasksControllers.deleteTask);

module.exports = router;
