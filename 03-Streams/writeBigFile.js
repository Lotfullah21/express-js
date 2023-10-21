<<<<<<< HEAD
const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync(
    "../01-Intro/folder/bigFile.txt",
    `# ${i} Hello Afghanistan,Hello HoshmandLab ${i + 2} \n`,
    { flag: "a" }
  );
}
=======
const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync(
    "../01-Intro/folder/bigFile.txt",
    `# ${i} Hello Afghanistan,Hello HoshmandLab ${i + 2} \n`,
    { flag: "a" }
  );
}
>>>>>>> 7bf887cd3475260cfe1a819bcf46eafb7c80d6d6
