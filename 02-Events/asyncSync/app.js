import EventEmitter from "events";

const customEvent = new EventEmitter();

// event.on is used to listen for an event, here the event is "sayhi", and the callback is defined to handle what to happens if that event occurred.
customEvent.on("sayhi", () => {
  console.log("greetings received");
});
customEvent.on("sayhi", () => {
  console.log("Bonjour received");
});
customEvent.on("sayhi", () => {
  console.log("Salaam received");
});
// event.emit is used to emit an event.
customEvent.emit("sayhi");
