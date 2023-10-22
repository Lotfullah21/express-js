### app.get(/about, (req, res) => { ... });

app.get: This is a method provided by the Express application (app) to define a route that responds to HTTP GET requests. It specifies that when a GET request is made to the /about route, the callback function will be executed.

("/about"): This is the route path. It defines the URL path for which this route should be triggered. In this case, it's /about, so the route will respond to http://localhost:5000/about.

(req, res) => { ... }: This is the callback function that gets executed when a request is made to the /about route. It takes two parameters: req and res.

req: This parameter is an object that represents the request being made to the server. It contains information about the client's request, such as headers, query parameters, and more.

res: This parameter is an object that represents the response that the server will send back to the client. It allows you to set response headers, send data, and control the HTTP response.

Inside the callback function, you can define the logic to handle the request and send a response back to the client. In this specific line, you have:

res.status(200): This sets the HTTP status code of the response to 200, which means "OK." It indicates that the request was successful.

.send("ABOUT PAGE"): This sends the string "ABOUT PAGE" as the response body. This is the content that the server will send back to the client when the /about route is accessed.

So, in summary, when a GET request is made to the /about route, the server will respond with a 200 OK status code and the text "ABOUT PAGE" as the response body. This is a simple example of how to define a route handler for a specific URL path in an Express.js application.

using res.status() is a best practice for providing clear and meaningful responses to clients and for ensuring proper behavior and handling of requests.

```js
const express = require("express");
const path = require("path");
// call express framework
const app = express();

// get the static file and use it, static files are the ones that express does not need to change.
app.use(express.static("./public"));

// home page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./page/index.html"));
});

// if none of the above resource was present, send this one
app.get("*", (req, res) => {
  res.status(404).send("<h1>Resources not found</h1>");
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
```

even if we don't pass `// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./page/index.html"));
// });`, and we put `index.html`, express will serve that as a home page and we can have access if we put the file in public folder.

### API VS SSR

API and SSR (Server-Side Rendering) are two different approaches in web development, each with its own characteristics and use cases. Let's compare them:

API (Application Programming Interface):

Backend-First Approach: In API-driven development, the primary focus is on building the backend of an application. The backend exposes a set of APIs (endpoints) that clients (e.g., web browsers, mobile apps) can use to request and exchange data.

Decoupled Frontend: The frontend and backend are decoupled. They can be developed independently of each other, allowing for flexibility in choosing the frontend technology (e.g., React, Angular, Vue.js) and the backend technology (e.g., Node.js, Python, Ruby).

Data-Centric: APIs are typically used to exchange data. Client applications request data from the API, and the API responds with the requested data, often in JSON format. This data can be used to render views on the client side.

Single Page Applications (SPA): APIs are commonly used in SPAs, where the initial HTML page is loaded, and subsequent data is fetched and rendered on the client side. This approach can lead to fast and responsive user interfaces.

Scalability: API-driven architectures can be highly scalable since the backend servers only need to focus on serving data, and the frontend clients handle rendering.

SSR (Server-Side Rendering):

Server-First Approach: SSR involves generating HTML on the server and sending pre-rendered HTML pages to the client. It's a more traditional approach where the server is responsible for rendering the HTML content.

Tightly Coupled Frontend: The frontend and backend are often tightly coupled. The same technology stack is often used for both the frontend and backend, such as server-side JavaScript with Node.js or Python with Django.

SEO-Friendly: SSR is considered more SEO-friendly because search engine bots can easily crawl and index the HTML content, as the initial page load already includes content.

Better Initial Load Performance: SSR can provide faster initial page load times compared to SPAs because the server sends fully rendered HTML pages. Subsequent interactions can still use client-side rendering for dynamic content.

Complexity: SSR can be more complex to implement and maintain, as it requires server-side rendering logic and potentially more server resources. Caching and performance optimization can be challenging.

##### Use Cases:

API: API-driven development is often chosen for building interactive, dynamic web applications, SPAs, or mobile apps where data is the primary focus. It is suitable for cases where frontend and backend can be developed independently and for applications where speed and responsiveness are crucial.

SSR: SSR is often used for content-focused websites, blogs, e-commerce sites, or any application where SEO is important and fast initial page loads are desired. It's also a good choice for applications where a shared codebase for both the frontend and backend is acceptable.

In practice, the choice between API and SSR depends on the specific requirements of the project, including SEO needs, development team skills, and the desired user experience. Some projects even combine both approaches, using API endpoints for dynamic content and SSR for SEO-critical pages.

### API

`js res.json()` res.json() is a method used to send JSON responses to clients. It's a convenient way to set the appropriate HTTP headers and send JSON data in the response body.

```js
app.get("/api/data", (req, res) => {
  const data = { message: "Hello, JSON!" };
  res.json(data);
});


'result':

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{"message": "Hello, JSON!"}

```

JavaScript Object: The data you provide as an argument to res.json(data) is a JavaScript object. JavaScript objects are a way to represent structured data with key-value pairs. For example:
const data = { name: "John", age: 30, city: "New York" };

JSON String: JSON (JavaScript Object Notation) is a data interchange format that represents data as a string in a specific format. It's a lightweight and human-readable way to structure and transmit data. The equivalent JSON representation of the above JavaScript object looks like this:
{
"name": "John",
"age": 30,
"city": "New York"
}
Serialization: The process of converting a JavaScript object into a JSON string is called serialization. Express.js uses the JSON.stringify() method behind the scenes to perform this serialization. JSON.stringify() is a built-in JavaScript function that takes a JavaScript object as its argument and returns the corresponding JSON string.

For example, to serialize the JavaScript object data, you can do:const jsonData = JSON.stringify(data);

### Route Parameters

In Express.js, route parameters are a way to capture values from the URL of a request and use them in your route handlers. They are defined in the route path by placing a colon before the parameter name, like :parameterName. Express then extracts the values from the URL and makes them available in the req.params object for you to use in your route handlers.

```js
const express = require("express");
const app = express();

// Define a route with a parameter
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

```js
app.get("/products/:category/:product", (req, res) => {
  const category = req.params.category;
  const product = req.params.product;
  res.send(`Category: ${category}, Product: ${product}`);
});
```

``
