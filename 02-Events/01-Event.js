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
