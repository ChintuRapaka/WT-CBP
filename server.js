const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});
app.get("/diceRoller", (req, res) => {
  res.sendFile(__dirname + "/src/diceRoller.html");
});
app.get("/Drumkit", (req, res) => {
  res.sendFile(__dirname + "/src/Drumkit.html");
});
app.get("/Simon", (req, res) => {
  res.sendFile(__dirname + "/src/Simon.html");
});

app.listen(5000, () => console.log("Server is up and running @localhost:5000"));
