<<<<<<< HEAD
const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// as we are returning a promise, we can use async function to wait for the promise to be resolved, once resolved, then we are returning our responses.
const useAsync = async () => {
  try {
    const first = await readFile("./folder/first.txt", "utf8");
    const second = await writeFile("./folder/second.txt", "utf8");
    await writeFilePromise(
      "./folder/text-using-async.txt",
      `Contents added using promises ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
useAsync();

// we can use `requir("fs").promise` to do the below functionality
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// use chaining
// getFile("./folder/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// we can use util.promisify from util module instead of writing the below func manually
// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// readFile("./folder/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });
=======
<<<<<<< HEAD
const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// as we are returning a promise, we can use async function to wait for the promise to be resolved, once resolved, then we are returning our responses.
const useAsync = async () => {
  try {
    const first = await readFile("./folder/first.txt", "utf8");
    const second = await writeFile("./folder/second.txt", "utf8");
    await writeFilePromise(
      "./folder/text-using-async.txt",
      `Contents added using promises ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
useAsync();

// we can use `requir("fs").promise` to do the below functionality
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// use chaining
// getFile("./folder/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// we can use util.promisify from util module instead of writing the below func manually
// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// readFile("./folder/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });
=======
const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// as we are returning a promise, we can use async function to wait for the promise to be resolved, once resolved, then we are returning our responses.
const useAsync = async () => {
  try {
    const first = await readFile("./folder/first.txt", "utf8");
    const second = await writeFile("./folder/second.txt", "utf8");
    await writeFilePromise(
      "./folder/text-using-async.txt",
      `Contents added using promises ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
useAsync();

// we can use `requir("fs").promise` to do the below functionality
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// use chaining
// getFile("./folder/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// we can use util.promisify from util module instead of writing the below func manually
// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// readFile("./folder/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data);
//   }
// });
>>>>>>> 7bf887cd3475260cfe1a819bcf46eafb7c80d6d6
>>>>>>> 9b81933c2b08eeb5ee95c3bd0658868f49e2ac7d
