import http, { Server } from "http";

const server = http.createServer((req, res) => {
  console.log("Request event");
  res.end("HOME");
});

// server.listen is an event loop, we stay there and listen for any callback to happen, if happened respond.
server.listen(4000, () => {
  console.log("Hello World");
});

// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

// console.log("not in event loop");
