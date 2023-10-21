const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("HOME PAGE");
  }
  if (req.url === "/about") {
    for (let i = 0; i < 90; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("ABOUT PAGE");
  }
  res.end("ERROR PAGE");
});

server.listen(5000, () => {
  console.log("Listening to port 5000");
});
