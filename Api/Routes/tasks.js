const express = require('express');
const router = express.Router();
const dbConn  = require('../db');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

router.get('/', function (req, res, next) {
	dbConn.query('SELECT * FROM alertes', function (err, rows) {
		if (err) {
			res.send({ error: err });
		} else {
			res.send(rows);
		}
	});
});

router.post('/add', function (req, res, next) {
	console.log(req)
	const title = req.body.title;
	const description = req.body.description

	if (title === undefined || description === undefined) {
		console.log("error")
		res.status(400).send('Vérifiez les datas');
	}
	const formData = {
		title: title,
		description: description,
	};

	dbConn.query('INSERT INTO alertes SET ?', formData, function (err, result) {
		if (err) {
			res.send({ error: err });
		} else {
			res.send({ success: 'alertes ajoutée' });
		}
	});
});

module.exports = router;