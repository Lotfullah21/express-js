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

// app.listen() is not an event itself, but it is a method used in web applications to set up an event listener for a specific event. liek req, if any request comes, respond to it.
server.listen(4000, () => {
  console.log("Hello World");
});

// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

// console.log("not in event loop");
