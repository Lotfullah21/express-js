## Blocking

```js
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Home Page");
  }

  if (req.url == "/contact") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`J = ${j} and I = ${i}`);
      }
    }
    res.end("Contact page");
  }
});
// setup an event listener for this event.
server.listen(4000, () => {
  console.log("Listening to port 4000");
});
```

## Non Blocking I/IO

```js
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
```

## A Promise in JavaScript represents the result of an asynchronous operation.

Think of a Promise as a placeholder for the result of an operation that hasn't completed yet but will at some point in the future. It provides a way to handle the result of that operation once it's available.

In simpler terms:
A Promise is like a box where you'll eventually find a value (the result of an operation).

The operation can be anything that takes time, such as reading a file, making an HTTP request, or performing a database query.
The Promise can be in one of two states: resolved (successful) or rejected (an error occurred).

resolve: resolve is a function provided as the first argument to the Promise's executor function. When you call resolve(someValue), you are signaling that the asynchronous operation was successful, and the Promise is fulfilled (resolved). The someValue you pass to resolve is the value that will be passed to the .then() handler when the Promise is resolved. In the appendToFile function, you are resolving the Promise with the content, which is the data you attempted to append to the file. This allows you to access and use that content when the Promise is resolved.

reject: reject is a function also provided as the first argument to the Promise's executor function. When you call reject(someError), you are signaling that the asynchronous operation encountered an error, and the Promise is rejected. The someError you pass to reject is the reason or error message that will be passed to the .catch() handler when the Promise is rejected. In the appendToFile function, you are rejecting the Promise with the err object when an error occurs during the file append operation. This allows you to handle and log the error when the Promise is rejected.

When the fs.appendFile operation is complete, it calls the provided callback function with an err argument. If err is truthy (indicating an error), it means something went wrong during the operation.

In the if (err) block, reject(err) is called. This means that the promise is being explicitly rejected with the err object as the reason for rejection. This error object typically contains information about what went wrong during the operation, such as a file system error.

If there is no error (i.e., err is falsy), it means that the operation was successful. In this case, the else block is executed.

In the else block, resolve(content) is called. This means that the promise is resolved, and it is resolved with the content variable. The content variable contains the data that was successfully appended to the file. By resolving the promise with this data, it becomes available in the .then() handler when the promise is successfully resolved.

In summary, when you use promises, you can explicitly control when to reject them with errors (using reject) and when to resolve them with results (using resolve). This allows you to handle the success and failure of asynchronous operations in a clear and structured manner. When the promise is resolved, the resolved value (in this case, the content) is made available for further processing in the .then() handler.

when using this, we are telling hey javaScript and main thread, continue executing the code, if react to the promise let it be, when the promise resolved or reject, I will come out and show what I did. CLEAR!.

### Promises

Promises in JavaScript are a way to handle asynchronous operations in a more organized and readable manner. They provide a structured approach to managing the success or failure of asynchronous tasks. Promises are built on the concept of representing a value that might not be available yet but will be at some point in the future.

```js
const myPromise = new Promise((resolve, reject) => {
  // This function is the executor.
  // It takes two callback functions, resolve and reject.
  // You write your asynchronous code in this function.
});
```

The Executor Function: The executor function is the core of the promise. It's a function that takes two parameters: resolve and reject. You place your asynchronous code inside this function.

resolve: Call this function when the asynchronous operation is successful. You can pass a value to resolve that will become the result of the promise when it's resolved.

reject: Call this function when an error occurs or the asynchronous operation fails. You can pass an error object or message to reject.

```js
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous code goes here
  if (success) {
    resolve(result); // If successful, resolve with a result
  } else {
    reject(error); // If there's an error, reject with an error
  }
});
```

Pending State: When the promise is created, it starts in a pending state. It hasn't resolved or rejected yet.

Chaining Promises: Promises can be chained together using .then() and .catch() methods. You can specify what to do when the promise is resolved (.then()) or when it's rejected (.catch()).

```js
myPromise
  .then((result) => {
    // Handle the resolved value
  })
  .catch((error) => {
    // Handle the error
  });
```

### WHAT does it mean by promise resolved or rejects

Resolved: When a Promise is "resolved," it means that the asynchronous operation associated with the Promise has completed successfully. In other words, the expected result or value from the operation is available and is considered a successful outcome. When a Promise is resolved, it transitions to the "fulfilled" state, and any .then() handlers attached to the Promise will be executed with the resolved value.

```js
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation completed successfully
  resolve("Operation successful");
});
```

Rejected: When a Promise is "rejected," it means that an error occurred during the asynchronous operation, and the operation did not complete as expected. Rejection is used to signal that something went wrong, and the Promise is unable to fulfill its intended purpose. When a Promise is rejected, it transitions to the "rejected" state, and any .catch() or .then() handlers with error handling attached to the Promise will be executed.

```js
const myPromise = new Promise((resolve, reject) => {
  // An error occurred during the asynchronous operation
  reject("An error occurred");
});
```

## Using async-await

### 1

```js
// this important to note when using async-await to import from 'fs/promises'
import fs from "fs/promises";

let content = "";
for (let i = 0; i < 123; i++) {
  content += `Line ${i}\n`;
}

const appendToFile = async (path) => {
  try {
    // wait until the promise is either resolved or rejected.
    await fs.appendFile(path, content, "utf-8");
    // if resolved, return content to be handled
    return content;
  } catch (err) {
    throw err;
  }
};

const writeToFile = async () => {
  try {
    // here data is the return of appendToFile fn which is content
    const data = await appendToFile("../content/newFile.txt");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

writeToFile();
```

### 2

we can use the traditional promise based function for doing the operation and async-await to handle the output of that operation.

```js
// this important to note when using async-await to import from 'fs/promises'
import fs from "fs";

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
```

you can see how easy it is using async-await to write files.

An async function is one that can use the await keyword to pause its execution until a Promise is resolved.

In async/await, you can use await to pause the execution of an async function until a Promise is either resolved or rejected. It's essential to handle both resolved and rejected Promises for proper error handling in your code.
The use of await allows you to work with Promises in a more synchronous-like fashion.
