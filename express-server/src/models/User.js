module.exports = (sequelize, Sequelize) => {
	return sequelize.define("User", {
		email: {
			type: Sequelize.STRING,
			unique: true,
		},
		password: Sequelize.STRING
	});
};