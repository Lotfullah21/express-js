const express = require("express");
const router = express.Router();
const { courses } = require("../data");

// import controller functions
const {
  getCourses,
  postCourses,
  updateCourses,
  deleteCourses,
} = require("../controller/courses");

// GET
router.get("/", getCourses);

// PUT
router.put("/:id", updateCourses);

// POST
router.post("/", postCourses);

// DELETE
router.delete("/:id", deleteCourses);

module.exports = router;
