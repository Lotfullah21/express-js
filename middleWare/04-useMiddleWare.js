const express = require("express");
const app = express();
const middle = require("./middleWareFn");

// use middleware in all the routes defined here.
app.use(middle);

app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/contact", (req, res) => {
  res.send("CONTACT");
});
app.get("/about", (req, res) => {
  res.send("ABOUT");
});

app.get("/courses", (req, res) => {
  res.send("COURSES");
});

app.listen(4000, () => {
  console.log("LISTENING");
});
