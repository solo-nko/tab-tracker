const Joi = require("joi");

module.exports = {
	register: (request, response, next) => {
		const schema = Joi.object({
			// The joi module has many built-in functions for checking common patterns.
			// in the case of "email", Joi.string() validates if it's a string, and Joi.email() validates if it's in email format.
			email: Joi.string().email(),
			password: Joi.string().regex(
				new RegExp("^[a-zA-Z0-9]{8,32}$")
			),
		});

		// runs validation against request body
		const {error} = schema.validate(request.body);

		if (error) {
			switch (error.details[0].context.key) {
				case "email":
					response.status(400).send({
						error: "Email address provided is invalid.",
					});
					break;
				case "password":
					response.status(400).send({
						error: "The password provided failed to match the minimum requirements.<br>" +
							"* Passwords may only contain lowercase and uppercase alphanumeric characters.<br>" +
							"* Passwords must be between 8 and 32 characters.",
					});
					break;
				default:
					response.status(400).send({
						error: "Invalid registration information;"
					});
					break;
			}
		} else {
			next();
		}
	}
};