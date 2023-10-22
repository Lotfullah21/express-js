const express = require("express");
const app = express();

const middle = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // if we do not add next(), this function will not passed to the next one, and it will stuck here.
  next();
};

app.get("/", middle, (req, res) => {
  res.send("HOME");
});

app.get("/contact", middle, (req, res) => {
  res.send("CONTACT");
});

app.listen(4000, () => {
  console.log("LISTENING");
});
