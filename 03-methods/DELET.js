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

app.delete("/api/colleges/:id", (req, res) => {
  // get the params
  const id = req.params.id;
  // check for the data with the param id
  const college = colleges.find((college) => college.id === Number(id));
  if (!college) {
    res
      .status(404)
      .json({ success: false, msg: `college with id=${id} was not found` });
  }
  // filter the dataset and return only the ones that does not match the given id.
  const newColleges = colleges.filter((college) => college.id !== Number(id));
  res
    .status(200)
    .json({ success: true, data: newColleges, msg: "updated list" });
});

app.listen(4000, () => {
  console.log("LISTENING");
});
