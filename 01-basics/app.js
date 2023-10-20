const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./page/index.html");
const stylePage = readFileSync("./page/style.css");
http
  .createServer((req, res) => {
    const url = req.url;

    // home page
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();

      // contact page
    } else if (url === "/contact") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Contact Page</h1>");
      res.end();

      // style page
    } else if (url === "/style.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(stylePage);
      res.end();

      // error page
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Page did not found</h1>");
      res.end();
    }

    console.log(req.url);
    console.log(req.method);
  })
  .listen(4000);
