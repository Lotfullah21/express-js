## Router

With Express, you can define routes for different URL paths and specify how your application should respond to requests to those paths. The express.Router() is an object in Express used for creating modular, mountable route handlers. It allows you to define sets of routes in separate files or modules and then use them as middleware in your main Express application.

`route.js`

```js
router.delete("/:id", (req, res) => {
  LOGIC;
});
```

`app.js`

```js
app.use("/api/courses", courseRouter);
```

Now, the application will be available under this route
`/api/courses/:id`, in other words `/api/courses` will act as a main root for all routes that have been defined in router.

#### Controllers and Routers

in controllers we define functionality of each app and, in routes we define route for each path.

```js
router.route("/").get(getCourses).post(postCourses);

router.route("/:id").put(updateCourses).delete(deleteCourses);
```

the above methods also can be used in route file.
