const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "mysql-xyz",
  user: process.env.USER,
  password: process.env.USER_PASS,
  database: "users",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

module.exports = db;
