console.log("Hello, world");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// build express server
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


app.get('/status', (req, res) => {
	res.send({
		message: 'Welcome to the server!'
	});
})

app.post('/register', (req, res) => {
	res.send({
		message: `User ${req.body.email} was registered successfully.`
	});
})

app.listen(process.env.PORT || 8081);