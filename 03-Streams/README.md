<<<<<<< HEAD
## Streams

when we read files using readFileSync, the will be read or written once, now if data is huge, it puts more pressure on the server.
In Node.js, streams are a fundamental concept used for handling data transfer and manipulation in smaller pieces. Streams allow you to read or write data in chunks rather than all at once, which can be more memory-efficient and faster, particularly when dealing with large datasets. Node.js has several built-in types of streams, including Readable, Writable, Duplex, and Transform streams

key types of streams in Node.js:

#### 1:

##### Readable Streams:

Readable streams are used for reading data from a source, such as a file, network connection, or user input. They emit data events when new data is available for consumption. Common examples of readable streams include file streams and HTTP request/response streams.s

```js
const fs = require("fs");
const readableStream = fs.createReadStream("../01-Intro/folder/first.txt");
readableStream.on("data", (resultedDataChunks) => {
  console.log(resultedDataChunks);
});
```
=======
## Streams

when we read files using readFileSync, the will be read or written once, now if data is huge, it puts more pressure on the server.
In Node.js, streams are a fundamental concept used for handling data transfer and manipulation in smaller pieces. Streams allow you to read or write data in chunks rather than all at once, which can be more memory-efficient and faster, particularly when dealing with large datasets. Node.js has several built-in types of streams, including Readable, Writable, Duplex, and Transform streams

key types of streams in Node.js:

#### 1:

##### Readable Streams:

Readable streams are used for reading data from a source, such as a file, network connection, or user input. They emit data events when new data is available for consumption. Common examples of readable streams include file streams and HTTP request/response streams.s

```js
const fs = require("fs");
const readableStream = fs.createReadStream("../01-Intro/folder/first.txt");
readableStream.on("data", (resultedDataChunks) => {
  console.log(resultedDataChunks);
});
```
>>>>>>> 7bf887cd3475260cfe1a819bcf46eafb7c80d6d6
