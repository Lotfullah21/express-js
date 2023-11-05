import fs from "fs/promises";

let content = "";
for (let i = 0; i < 123; i++) {
  content += `Line ${i}\n`;
}

const appendToFile = async (path) => {
  try {
    // wait until the promised is achieved,
    await fs.appendFile(path, content, "utf-8");
    return content;
  } catch (err) {
    throw err;
  }
};

const writeToFile = async () => {
  try {
    const data1 = await appendToFile("../content/newFile1.txt");
    const data2 = await appendToFile("../content/newFile2.txt");
    const data3 = await appendToFile("../content/newFile3.txt");
    console.log(data1, data2, data3);
  } catch (error) {
    console.log(error);
  }
};

writeToFile();
