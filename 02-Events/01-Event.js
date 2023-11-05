// getting EventEmitter so that we can inherit from this class.
const EventEmitter = require("events");

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event listener, "meEvent" will be the instance that we are listening to.
myEmitter.on("myEvent", () => {
  console.log("Event is triggered");
});

// Emit the event
myEmitter.emit("myEvent");





// 2
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
