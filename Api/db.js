const mysql = require('mysql');
console.log();
const infos = {
	host: 'localhost',
	user: 'root',
	password: '',
	port: '3306',
	database: 'mgmobile',
};
const connection = mysql.createConnection(infos);

connection.connect(function (error) {
	if (error) {
		console.error(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;