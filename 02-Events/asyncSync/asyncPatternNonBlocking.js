import { rejects } from "assert";
import fs from "fs";
import { resolve } from "path";

let content = "";
for (let i = 0; i < 123; i++) {
  content += `Line ${i}\n`;
}

const appendToFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
};

appendToFile("../content/newFile.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
