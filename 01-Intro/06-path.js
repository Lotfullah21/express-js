// The path module allows you to retrieve and manipulate directory and file paths.
// import the required module
const path = require("path");
console.log("SEPARATOR", path.sep);
// file path, join the current files
const filePath = path.join("/folder", "subfolder", "file.txt");
console.log("FILEPATH: ", filePath);

// get the base name
const base = path.basename(filePath);
console.log("BASE FILE", base);

// get the absolute path to the given directories.
//  C:\Users\Lotfullah Andishmand\Desktop\nodejs-tutorial\01-Intro\folder\subfolder\file.txt
const absolute = path.resolve(
  __dirname,
  "01-Intro",
  "folder",
  "subfolder",
  "file.txt"
);
console.log("ABSOLUTE", absolute);
