const express = require("express");
const app = express();
const morgan = require("morgan");

// application is using the morgan middleware to log HTTP request information in a "tiny" format.
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
