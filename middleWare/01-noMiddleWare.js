const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("HOME");
});

app.get("/contact", (req, res) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("CONTACT");
});

app.listen(4000, () => {
  console.log("LISTENING");
});
