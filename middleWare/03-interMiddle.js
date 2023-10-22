const express = require("express");
const app = express();
const middle = require("./middleWareFn");

app.get("/", middle, (req, res) => {
  res.send("HOME");
});

app.get("/contact", middle, (req, res) => {
  res.send("CONTACT");
});

app.listen(4000, () => {
  console.log("LISTENING");
});
