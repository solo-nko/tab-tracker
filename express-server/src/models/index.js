// see https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");
const db = {};

const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options,
	);

fs
	// read through current directory and return array of files
	.readdirSync(__dirname)
	// return new array that doesn't have index.js
	.filter(file => file !== "index.js")
	// declare new SQL model for each remaining model in the array. points sequelize to each model file
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize);
		db[model.name] = model;
	});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;