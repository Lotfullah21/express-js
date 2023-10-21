<<<<<<< HEAD
const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync("../01-Intro/folder/bigFile.txt", "utf8");
    res.end(text);
  })
  .listen(4000);
=======
const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync("../01-Intro/folder/bigFile.txt", "utf8");
    res.end(text);
  })
  .listen(4000);
>>>>>>> 7bf887cd3475260cfe1a819bcf46eafb7c80d6d6
