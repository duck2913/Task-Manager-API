console.clear();
// libraries
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
const tasksRouter = require("./routes/tasks.routes");

app.use("/tasks", tasksRouter);

// error handling
app.use((error, req, res, next) => {
	console.error(error);
});

app.listen(4000, () => {
	console.log(`-- Server is connected --`);
});
