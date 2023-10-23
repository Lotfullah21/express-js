const express = require("express");
const app = express();
const { resources, colleges } = require("./data");
// using res.json() to send the data in json format.
app.get("/", (req, res) => {
  res.json(resources);
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>Resources not found</h1>");
});

app.listen(4000, () => {
  console.log("user uses the server on port 4000");
});

// 1

// using res.json() to send the data in json format.
// app.get("/", (req, res) => {
//   res.json([
//     { name: "HoshmandLab", field: "Technology" },
//     { name: "MIT", field: "Knowledge" },
//   ]);
// });

// app.get("*", (req, res) => {
//   res.status(404).send("<h1>Resources not found</h1>");
// });

// app.listen(4000, () => {
//   console.log("user uses the server on port 4000");
// });
