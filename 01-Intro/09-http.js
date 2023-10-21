const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to homepage bro");
    return;
  }
  if (req.url === "/contact") {
    res.end("welcome to contact page 9102321031");
    return;
  }
  res.end(`<h1>Error</h1>
    <p>cannot find the home page</p>
    <a href="/">home</a>`);
});

server.listen(3000);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("Hello From server");
//   res.end();
// });

// server.listen(3000);
