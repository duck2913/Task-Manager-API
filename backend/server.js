console.clear();
// libraries
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", (req, res) => {
	res.send("hell");
});

app.listen(4000, () => {
	console.log(`-- Server is connected --`);
});
