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

// Another parameter
app.get("/api/resources/:field", (req, res) => {
  const resourceField = req.params.field;
  const newResource = resources.find(
    // be careful for params type, it will be always a string, see if your id is also a string.
    (resource) => resource.field === resourceField
  );
  if (!newResource) {
    res.status(404).send("Resource does not exist");
  }
  console.log(newResource);
  res.send(newResource);
});

// parameters
app.get("/api/resources/:resourceID", (req, res) => {
  console.log(req);
  console.log("Params", req.params);
  const resourceId = req.params.resourceID;
  const newResource = resources.find(
    // be careful for params type, it will be always a string, see if your id is also a string.
    (resource) => resource.id === Number(resourceId)
  );
  if (!newResource) {
    res.status(404).send("Resource does not exist");
  }
  console.log(newResource);
  res.send(newResource);
});

app.listen(4000, () => {
  console.log("user uses the server on port 4000");
});
