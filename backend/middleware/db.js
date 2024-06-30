const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "127.0.0.1",
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
