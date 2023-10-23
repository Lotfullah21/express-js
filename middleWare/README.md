## Middleware

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

middleware refers to functions or modules that can process the HTTP request or response objects or modify them in some way. Middleware functions are executed in the order they are added to the application and can be used for various purposes, such as authentication, logging, parsing request data, handling errors, and more. Middleware plays a crucial role in the request-response cycle of an Express application.

https://expressjs.com/en/guide/using-middleware.html

The next function is used to pass control to the next middleware or route handler in the stack.

When you call next() within a middleware function, it tells Express to move on to the next function in the middleware chain.

If at any point a middleware does not call next(), it can stop the execution chain, and the request may not proceed to subsequent middleware or route handlers. This can be used for conditions like authentication checks or error handling.

This allows you to create a chain of middleware functions, each responsible for different aspects of request processing, and they are executed in sequence.

middleware functions should be declared on the top of the all other routes.

### app.use()

how to use `middleware` in all routes ?

`app.use("middleWareName")` we can use the same middleware in all routes without mentioning in every route explicitly.

`app.use("/api", middle);`
if we specify a path, it is going to be applied only to the paths that is having the route that .use is expecting, for instance here any path that is having /api would be able to use this one.

```js
npm i morgan
const morgan = require("morgan");
app.use(morgan("tiny"));
```

the above third party package gives more info about or request, like the time, method, url and time it takes for req to be completed.

```js
app.use(express.urlencoded({ extended: false }));
```

This is a middleware function provided by the Express.js framework. It is used for parsing data that is sent to the server from an HTML form using the application/x-www-form-urlencoded content type. This is a common way to send data from an HTML form.{ extended: false }: The express.urlencoded() middleware accepts an optional configuration object as an argument. In this case, extended is set to false. When extended is set to false, it uses the QueryString library to parse the data, which results in a nested object with more predictable behavior
The app.use() method is used to mount the express.urlencoded() middleware globally, which means it will be executed for all incoming HTTP requests to your Express application. This middleware is responsible for parsing URL-encoded data from the request's body.

When you "mount" a middleware function, you are essentially adding it to the request processing pipeline, and it will be executed in the order it is mounted.

#### Controllers and Routers

in controllers we define functionality of each app and, in routes we define route for each path.
