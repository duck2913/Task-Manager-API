const express = require("express");
const router = express.Router();

const tasksControllers = require("../controllers/tasks.controller");

router.get("/", tasksControllers.getTasks);

module.exports = router;
