const express = require("express");
const app = express();
const morgan = require("morgan");

// course router
const courseRouter = require("./routes/courses");

// login router
const authRouter = require("./routes/auth");

// use files from the given folder in main route.
app.use(express.static("./public-methods"));

// it  parses URL-encoded data from incoming HTTP requests.
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

// use login router
app.use("/login", authRouter);

// use courses router, "/api/courses" are the home route here.
app.use("/api/courses", courseRouter);

app.listen(4000, () => {
  console.log("LISTENING");
});
