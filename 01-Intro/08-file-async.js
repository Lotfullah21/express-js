const { readFile, writeFile } = require("fs");

// we will go with asynchronous mode, file path, encoding type, and a callback fn where the err and res will be passed as a parameter.
readFile("./folder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./folder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(`files had been read in here. ${first} ${second}`);
    writeFile(
      "./folder/new-file-async.txt",
      `Adding a new result using async operation ${first} ${second}`,
      (err, result) => {
        console.log("result", result);
      }
    );
  });
});
