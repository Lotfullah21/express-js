const express = require("express");

// call express
const app = express();

// get method takes two param, first one is the path we are trying to access and the 2nd one is the callback, where every time, the user make a request will be called.
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
// It specifies that when a GET request is made to the /about route, the callback function will be executed.
app.get("/about", (req, res) => {
  res.status(200).send("ABOUT PAGE");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(5000, () => {
  console.log("Console is running");
});
