const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get('/', (req, res) => {
	res.send('Hello world!');
});
app.post('/add', (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 === 'string' || typeof num1 === 'string') {
			return res.status(200).send({
				status: 'error',
				message: 'Invalid data types',
			});
		}
		if (
			num1 < -10_000_00 ||
			num2 < -10_000_00 ||
			num1 + num2 < -10_000_00
		) {
			return res.status(200).send({
				status: 'error',
				message: 'Underflow',
			});
		}
		if (num1 > 10_000_00 || num2 > 10_000_00 || num1 + num2 > 10_000_00) {
			return res.status(200).send({
				status: 'error',
				message: 'Overflow',
			});
		}
		res.status(200).json({
			status: 'success',
			message: 'the sum of given two numbers',
			sum: num1 + num2,
		});
	} catch (err) {
		res.status(404).send({
			message: 'err',
		});
	}
});
app.post('/sub', (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 === 'string' || typeof num1 === 'string') {
			return res.status(200).send({
				status: 'error',
				message: 'Invalid data types',
			});
		}
		if (
			num1 < -10_000_00 ||
			num2 < -10_000_00 ||
			num1 - num2 < -10_000_00
		) {
			return res.status(200).send({
				status: 'error',
				message: 'Underflow',
			});
		}
		if (num1 > 10_000_00 || num2 > 10_000_00 || num1 - num2 > 10_000_00) {
			return res.status(200).send({
				status: 'error',
				message: 'Overflow',
			});
		}
		res.status(200).json({
			status: 'success',
			message: 'the difference of given two numbers',
			difference: num1 - num2,
		});
	} catch (err) {
		res.status(404).send({
			message: 'err',
		});
	}
});
app.post('/multiply', (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 === 'string' || typeof num1 === 'string') {
			return res.status(200).send({
				status: 'error',
				message: 'Invalid data types',
			});
		}
		if (
			num1 < -10_000_00 ||
			num2 < -10_000_00 ||
			num1 * num2 < -10_000_00
		) {
			return res.status(200).send({
				status: 'error',
				message: 'Underflow',
			});
		}
		if (num1 > 10_000_00 || num2 > 10_000_00 || num1 * num2 > 10_000_00) {
			return res.status(200).send({
				status: 'error',
				message: 'Overflow',
			});
		}
		res.status(200).json({
			status: 'success',
			message: 'The product of given numbers',
			result: num1 * num2,
		});
	} catch (err) {
		res.status(404).send({
			message: 'err',
		});
	}
});
app.post('/divide', (req, res) => {
	try {
		const { num1, num2 } = req.body;
		if (typeof num1 === 'string' || typeof num1 === 'string') {
			return res.status(200).send({
				status: 'success',
				message: 'Invalid data types',
			});
		}
		if (num2 === 0) {
			return res.status(200).send({
				status: 'error',
				message: 'Invalid data types',
			});
		}
		if (
			num1 < -10_000_00 ||
			num2 < -10_000_00 ||
			num1 / num2 < -10_000_00
		) {
			return res.status(200).send({
				status: 'error',
				message: 'Underflow',
			});
		}
		if (num1 > 10_000_00 || num2 > 10_000_00 || num1 / num2 > 10_000_00) {
			return res.status(200).send({
				status: 'error',
				message: 'Overflow',
			});
		}
		res.status(200).json({
			status: 'success',
			message: 'The division of given numbers',
			result: num1 / num2,
		});
	} catch (err) {
		res.status(404).send({
			message: 'err',
		});
	}
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
