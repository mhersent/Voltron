var express = require('express');
var router = express.Router();

const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

router.get('/books', function(req, res) {
	const options = {
		method: 'GET',
		url: process.env.BDD_URL + '',
		headers: {}
	};
	request(options, function(error, response, body) {
		if (error) throw new Error(error);
		var jsonObject = JSON.parse(body);
		res.send(jsonObject);
	});
});

module.exports = router;
