const express = require("express");
const app = express();
const morgan = require("morgan");
const { colleges } = require("./data");
// we can use more than one middleware in our application.

app.use(express.static("./public-methods"));
// it  parses URL-encoded data from incoming HTTP requests.
app.use(express.urlencoded({ extended: false }));

app.get("", (req, res) => {
  res.send("<h1>HOME<h1>");
});
app.get("/api/colleges", (req, res) => {
  res.status(200).json({ success: true, data: colleges });
});

// Posting data to this route.
app.post("/login", (req, res) => {
  console.log(req.body);
  // name is the property we got from input and it acts as a key to the data we are sending.
  const name = req.body.name;
  if (name) {
    return res.status(200).send(`${name} data had been submitted`);
  } else {
    res.status(403).send("unauthorized");
  }
});

app.listen(4000, () => {
  console.log("LISTENING");
});
