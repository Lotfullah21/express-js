## Middleware

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

middleware refers to functions or modules that can process the HTTP request or response objects or modify them in some way. Middleware functions are executed in the order they are added to the application and can be used for various purposes, such as authentication, logging, parsing request data, handling errors, and more. Middleware plays a crucial role in the request-response cycle of an Express application.

https://expressjs.com/en/guide/using-middleware.html

`Request Flow`: In an Express application, when a client makes an HTTP request, that request goes through a series of middleware functions before reaching the final route handler (or endpoint) that sends a response back to the client. Middleware functions are executed in the order they are registered.

`next()` Function: When a middleware function is executed and it has more work to be done or it needs to pass control to the next middleware, it calls the next() function. This tells Express to move to the next middleware in the chain.
The next function is used to pass control to the next middleware or route handler in the stack.

`Order Matters`: The order of middleware registration matters. The first middleware registered will be the first to execute, and the last one will be the last to execute.

`Response`: Middleware functions can also end the request-response cycle by sending a response to the client (e.g., using res.send(), res.json(), or res.redirect()). Once a middleware sends a response, the remaining middlewares will not be executed.

If at any point a middleware does not call next(), it can stop the execution chain, and the request may not proceed to subsequent middleware or route handlers.
This can be used for conditions like authentication checks or error handling.

This allows you to create a chain of middleware functions, each responsible for different aspects of request processing, and they are executed in sequence.

middleware functions should be declared on the top of the all other routes.

```js
const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); // Pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  next(); // Pass control to the next middleware
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

The request starts at "Middleware 1."
"Middleware 1" calls next(), passing control to "Middleware 2."
"Middleware 2" calls next(), passing control to the route handler.
The route handler sends a response, and the response is sent to the client.

`##  js Request -> Middleware 1 -> Middleware 2 -> Route Handler (Response) `

`js If any of the middleware functions do not call next(), the request will not proceed to the next middleware, and the request-response cycle might be halted at that point.`

### It is crucial to know when to call next()

```js
const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); // Pass control to the next middleware
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  // No next() here, so control will not pass to the next middleware
});

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

### Response cycle for the above snippet.

The request starts at "Middleware 1." This middleware logs "Middleware 1" and then calls next() to pass control to the next middleware.
Control moves to "Middleware 2." This middleware logs "Middleware 2" but does not call next(), which means it stops the middleware chain. Control will not pass to the next middleware or the route handler.
Since "Middleware 2" does not call next(), the request-response cycle is halted at this point. The route handler is never reached, and no response is sent to the client.
Therefore, the default Express response for a request that doesn't match any route (in this case, since the route handler is not reached) is "Cannot GET /". The client will see this response.

```js npm i morgan
const morgan = require("morgan");
app.use(morgan("tiny"));
```

the above third party package gives more info about or request, like the time, method, url and time it takes for req to be completed.

```js
app.use(express.urlencoded({ extended: false }));
```

This is a middleware function provided by the Express.js framework. It is used for parsing data that is sent to the server from an HTML form using the application/x-www-form-urlencoded content type. This is a common way to send data from an HTML form.{ extended: false }: The express.urlencoded() middleware accepts an optional configuration object as an argument. In this case, extended is set to false. When extended is set to false, it uses the querystring library to parse the data, which results in a nested object with more predictable behavior
The app.use() method is used to mount the express.urlencoded() middleware globally, which means it will be executed for all incoming HTTP requests to your Express application. This middleware is responsible for parsing URL-encoded data from the request's body.

### Mounting

When you "mount" a middleware function, you are essentially adding it to the request processing pipeline, and it will be executed in the order it is mounted.
This is often done using the app.use() method, where you provide a path as the first argument, followed by the routes and middleware you want to attach

## app.use([path,] callback [, callback...])

Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
in fact, app.use expects to have a middle ware, either built on 3rd party ones.
