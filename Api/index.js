const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const alertesRoute = require('./Routes/tasks');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

app.use('/tasks', alertesRoute);

app.listen(8081, () => {
    console.log("Serveur à l'écoute")
})