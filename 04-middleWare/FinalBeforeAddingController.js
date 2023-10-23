const express = require("express");
const router = express.Router();
const { courses } = require("../data");

// GET
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: courses });
});

// PUT
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(name, id);
  const college = courses.find((college) => college.id === Number(id));
  if (!college) {
    res
      .status(404)
      .json({ success: false, msg: `college was not found with ${id}` });
  }
  const newCourses = courses.map((college) => {
    if (college.id === Number(id)) {
      college.name = "MY NAME";
    }
    return college;
  });
  res.status(200).json({ success: true, data: newCourses });
});

// POST
router.post("/", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide the name" });
  }
  res.status(201).send({ success: true, data: name });
});

// DELETE
router.delete("/:id", (req, res) => {
  // get the params
  const id = req.params.id;
  // check for the data with the param id
  const college = courses.find((college) => college.id === Number(id));
  if (!college) {
    res
      .status(404)
      .json({ success: false, msg: `college with id=${id} was not found` });
  }
  // filter the dataset and return only the ones that does not match the given id.
  const newCourses = courses.filter((college) => college.id !== Number(id));
  res
    .status(200)
    .json({ success: true, data: newCourses, msg: "updated list" });
});

module.exports = router;
