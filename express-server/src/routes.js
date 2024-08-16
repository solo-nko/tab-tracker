const AuthController = require('./controllers/AuthController');
const AuthControllerPolicy = require('./policies/AuthControllerPolicy');

module.exports = (app) => {
	// When a POST request directed at "/register" arrives
	app.post("/register",
		// AuthControllerPolicy handles validation for the request body.
		// the next() function inside AuthControllerPolicy tells Express.js to move on to the next item in this list (AuthController)
		AuthControllerPolicy.register,
		AuthController.register);

	// when a GET request directed at "/status" arrives
	app.get("/status", (req, res) => {
		res.send({
			message: "Welcome to the server!"
		});
	});
}