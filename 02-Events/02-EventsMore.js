const EventEmitter = require("events");
// Create an instance of the event
const myEvent = new EventEmitter();

// listen to the event.
myEvent.on("response", () => {
  console.log("Hello Event");
});
// we can have more than one event.
myEvent.on("response", () => {
  console.log("Hello 2nd Event.");
});
// we can pass parameters as normal functions.
myEvent.on("response", (name, great) => {
  console.log(`Hello ${name}, you are ${great}`);
});

// emit the event
myEvent.emit("response", "Afghanistan", "beautiful");

// we can pass parameters as normal functions.
myEvent.on("response", () => {
  console.log(`Hello 3rd event`);
});

// // const EventEmitter = require("events");
// // // Create an instance of the event
// // const myEvent = new EventEmitter();

// // // listen to the event.
// // myEvent.on("response", () => {
// //   console.log("Hello Event");
// // });
// // // we can have more than one event.
// // myEvent.on("response", () => {
// //   console.log("Hello 2nd Event.");
// // });
// // // we can pass parameters as normal functions.
// // myEvent.on("response", (name, great) => {
// //   console.log(`Hello ${name}, you are ${great}`);
// // });

// // // emit the event
// // myEvent.emit("response", "Afghanistan", "beautiful");

// // // we can pass parameters as normal functions.
// // myEvent.on("response", () => {
// //   console.log(`Hello 3rd event`);
// });
