const express = require("express");
const app = express();
const morgan = require("morgan");
const { colleges } = require("./data");
// we can use more than one middleware in our application.

app.use(morgan("tiny"));

app.get("", (req, res) => {
  res.send("<h1>HOME<h1>");
});
app.get("/api/colleges", (req, res) => {
  res.status(200).json({ success: true, data: colleges });
});

app.listen(4000, () => {
  console.log("LISTENING");
});
