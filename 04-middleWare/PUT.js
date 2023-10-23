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

app.put("/api/colleges/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(name, id);
  const college = colleges.find((college) => college.id === Number(id));
  if (!college) {
    res
      .status(404)
      .json({ success: false, msg: `college was not found with ${id}` });
  }
  const newColleges = colleges.map((college) => {
    if (college.id === Number(id)) {
      college.name = "MY NAME";
    }
    return college;
  });
  res.status(200).json({ success: true, data: newColleges });
});

app.listen(4000, () => {
  console.log("LISTENING");
});
