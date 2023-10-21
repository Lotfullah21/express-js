<<<<<<< HEAD
const { isUtf8 } = require("buffer");
const { createReadStream } = require("fs");

// create an instance of createReadStream
// const stream = createReadStream("../01-Intro/folder/bigFile.txt");

// // listen to the data event,but remember, the first parameter should be "data"
// stream.on("data", (dataInChunks) => {
//   // we can see in the console the output in different chunks
//   console.log(dataInChunks);
// });
// // stream.emit("readChunk");

// // we have the error event as well.
// stream.on("error", (error) => {
//   // we can see in the console the output in different chunks
//   console.log(error);
// });

// by default the data chunk we are passing in is 64kb, we can control this passing additional params.{highWaterMark:in bytes}

const newStream = createReadStream("../01-Intro/folder/bigFile.txt", {
  // read data in different chunks, each 180000 kill bytes in size
  highWaterMark: 180000,
  //   encoding: "utf8",
});
newStream.on("data", (dataInChunks) => {
  // we can see in the console the output in different chunks
  console.log(dataInChunks);
});
=======
const { isUtf8 } = require("buffer");
const { createReadStream } = require("fs");

// create an instance of createReadStream
// const stream = createReadStream("../01-Intro/folder/bigFile.txt");

// // listen to the data event,but remember, the first parameter should be "data"
// stream.on("data", (dataInChunks) => {
//   // we can see in the console the output in different chunks
//   console.log(dataInChunks);
// });
// // stream.emit("readChunk");

// // we have the error event as well.
// stream.on("error", (error) => {
//   // we can see in the console the output in different chunks
//   console.log(error);
// });

// by default the data chunk we are passing in is 64kb, we can control this passing additional params.{highWaterMark:in bytes}

const newStream = createReadStream("../01-Intro/folder/bigFile.txt", {
  // read data in different chunks, each 180000 kill bytes in size
  highWaterMark: 180000,
  //   encoding: "utf8",
});
newStream.on("data", (dataInChunks) => {
  // we can see in the console the output in different chunks
  console.log(dataInChunks);
});
>>>>>>> 7bf887cd3475260cfe1a819bcf46eafb7c80d6d6
