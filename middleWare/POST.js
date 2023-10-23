const express = require("express");
const app = express();
const morgan = require("morgan");
const { colleges } = require("./data");
// we can use more than one middleware in our application.

app.use(express.static("./public-methods"));
// it  parses URL-encoded data from incoming HTTP requests.
app.use(express.urlencoded({ extended: false }));

app.post("/api/colleges", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide the name" });
  }
  res.status(201).send({ success: true, data: name });
});

app.listen(4000, () => {
  console.log("LISTENING");
});
