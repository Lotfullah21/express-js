const express = require("express");
const app = express();
const { resources, colleges } = require("./data");
// using res.json() to send the data in json format.
app.get("/", (req, res) => {
  res.send("<h1>HomePage</h1> <a href='/api/resources'>resources</a>");
});

app.get("/api/resources", (req, res) => {
  // send only name and id
  const newFeatures = resources.map((course) => {
    const { id, name } = course;
    return { id, name, field };
  });
  res.json(newFeatures);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let newResources = [...resources];
  // if search query existed, sort the resources
  if (search) {
    newResources = newResources.filter((resource) => {
      return resource.name.startsWith(search);
    });
  }

  // if limit query existed
  if (limit) {
    newResources = newResources.slice(0, Number(limit));
  }

  console.log(req.query);
  res.status(200).json(newResources);
});

app.listen(4000, () => {
  console.log("user uses the server on port 4000");
});
