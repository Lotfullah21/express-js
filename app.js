<<<<<<< HEAD
const { URL } = require("url");
const webAddress =
  "http://localhost:4000/home.html?name=Ahmad&country=Palestine&status=student";
// generating a new url based on URL class so that we can have a structured url to parse,This class is used to work with URLs, parse them, and access their components.
// create a new URL object to represent and work with the URL defined in the webAddress string.
const newUrlToParse = new URL(webAddress);
// we can use searchParams method to have access to the query parameters in a URL, The object will now allow you to access different components of the URL, including query parameters.
const queryData = newUrlToParse.searchParams;
console.log(queryData);
// using get method to have access to each
console.log(queryData.get("name"));
console.log(queryData.get("country"));
=======
// const num = 0;

// if (num > 1) {
//   console.log("num greater");
// } else {
//   console.log("num smaller");
// }
const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const text = fs.readFileSync("../01-Intro/folder/bigFile.txt", "utf8");
    res.end(text);
  })
  .listen(5000);
>>>>>>> 7bf887cd3475260cfe1a819bcf46eafb7c80d6d6
