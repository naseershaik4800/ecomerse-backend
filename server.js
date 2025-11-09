const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const users = [
  { username: "rahul", password: "rahul@2021" },
  { username: "naseer", password: "naseer@123" },
];


app.post("/login", (req, res) => {
  console.log("Received body:", req.body);

  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({ error_msg: "Username and password required" });
  }

 
  const user = users.find(
    (each) =>
      each.username.toLowerCase() === username.toLowerCase() &&
      each.password === password
  );

  if (user) {
    return res.json({ jwt_token: "dummy-jwt-token" });
  } else {
    return res.status(401).json({ error_msg: "Invalid username or password" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
