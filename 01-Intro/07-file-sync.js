// by synchronous we mean we are reading file in blocking mode which means during this time, we cannot do other thing.
// The fs module can also be used for input and output, known as I/O. The fs module methods can be used to retrieve information from or write data to an external file.

const { readFileSync } = require("fs");
const file = require("fs");
const writeFile = file.writeFileSync;

// reading from a file, we need to provide, the path, and the encoding type.
const first = readFileSync("./folder/first.txt", "utf8"); // block the code execution until this line execution finished.
const second = readFileSync("./folder/second.txt", "utf8");
console.log(first, second);

// for writing a file, we need provide the path, and then the content we are going to write, if the file exist,the content will be written there, if not, the file will be created.
writeFile(
  "./folder/new-file.txt",
  `new contents had been written here, ${first} ${second}`,
  { flag: "a" }
);
