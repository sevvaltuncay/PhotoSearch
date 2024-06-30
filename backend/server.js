const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("./middleware/db");
const bcrypt = require("bcrypt");
const validator = require("validator");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).send("You must fill all fields!");
  }
  if (!validator.isEmail(email)) {
    return res.status(400).send("Invalid email address!");
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).send("Password is not strong enough!");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
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
        res.send("Registration successful!");
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Error processing your request!");
  }
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

app.get("/", (req, res) => res.status(200).json({ message: "Başarılı" }));
