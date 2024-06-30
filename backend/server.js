const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("./middleware/db");
const bcrypt = require("bcrypt");
const validator = require("validator");
const app = express();

const saltRounds = 10;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).send("You mustt fill all fields!");
  }
  if (!validator.isEmail(email)) {
    return res.status(400).send("Invalid email!");
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).send("Not enough strong password!");
  }
  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .send("Something went wrong while your password was hashing!");
    }
    const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
    mysql.query(checkEmailQuery, [email], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Database error!");
      }
      if (results.length > 0) {
        return res.status(400).send("This email alredy in use!");
      }

      const insertUserQuery =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      mysql.query(
        insertUserQuery,
        [username, email, hashedPassword],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).send("Database error!");
          }
          res.send("Success registered!");
        }
      );
    });
  });
});
//login endpoint
app.post("/login", (req, res) => {});

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
app.get("/", (req, res) => res.status(200).json({ message: "Başarılı" }));
