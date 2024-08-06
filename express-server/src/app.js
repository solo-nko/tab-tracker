console.log("Hello, world");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const {sequelize} = require("./models");

const config = require("./config/config");

// build express server
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
	res.send({
		message: "Welcome to the server!"
	});
});

require("./routes")(app);

// set up sequelize database and then start server
sequelize.sync().then(() => {
		app.listen(config.port);
		console.log(`Server started on port ${config.port}`);
	}
);