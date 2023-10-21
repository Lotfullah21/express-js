<<<<<<< HEAD
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
=======
<<<<<<< HEAD
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
=======
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
>>>>>>> 7bf887cd3475260cfe1a819bcf46eafb7c80d6d6
>>>>>>> 9b81933c2b08eeb5ee95c3bd0658868f49e2ac7d
