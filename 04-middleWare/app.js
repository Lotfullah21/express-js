const express = require("express");
const app = express();
const middle = require("./middleWareFn");
const bestUser = require("./bestUser");
const morgan = require("morgan");
// we can use more than one middleware in our application.

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("HOME");
});

app.get("/contact", (req, res) => {
  res.send("CONTACT");
});
app.get("/about", (req, res) => {
  res.send("ABOUT");
});

// we can specify on which routes we want to use these middlewares.
app.get("/courses", (req, res) => {
  res.send("COURSES");
});

app.listen(4000, () => {
  console.log("LISTENING");
});
