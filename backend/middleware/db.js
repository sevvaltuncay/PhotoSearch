const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.USER_PASS,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

module.exports = db;
