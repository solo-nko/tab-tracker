const {User} = require("../models");

module.exports = {
	async register(request, response) {
		try {
			// create new row in table from request body
			const user = await User.create(request.body);
			console.log(user.toJSON());
			response.status(200).send(user.toJSON());
			// response.send({
			// 	message: `User ${request.body.email} was registered successfully.`
			// });
		} catch (error) {
			response.status(400).send({
				error: "This email account is already in use."
			});
		}
	}
};