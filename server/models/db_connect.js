

require('dotenv').config();
const mysql = require('mysql2');
const { rejects } = require('node:assert');
const { resolve } = require('node:dns');

const con = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PSWD,
	database: process.env.MYSQL_DB
});

const query = (sql, binding) => {
	return new Promise((resolve, rejects) => {
		con.query(sql, binding, (err, result) => {
			if (err) rejects(err);
			resolve(result)
		});
	});
};

// =================================
// =================================
// =================================

// const con = require("./db_connect");

// async function createTable() {
// 	let sql = 
// }