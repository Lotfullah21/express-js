const express = require("express");
const { courses } = require("./data");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome Home</h1>");
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/courses/v1/query", (req, res) => {
  const search = req.query.search;
  const { pages } = req.query;

  let newCourses = [...courses];
  if (search) {
    newCourses = newCourses.find((course) => {
      return course.name.startsWith(search);
    });
  }
  if (pages) {
    return newCourses.slice(0, Number(pages));
  }
  if (newCourses.length < 0) {
    //   we add 200 because our request was successful, but no data was found there.
    return res.status(200).send("No courses matched your search");
  }
  res.status(200).json(newCourses);
  console.log(req.query);
});

// Using Params
app.get("/api/courses/:id", (req, res) => {
  const id = req.params.id;
  const item = courses.find((course) => course.id === Number(id));
  if (!item) {
    return res.send("Item was not found");
  }
  res.json(item);
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
