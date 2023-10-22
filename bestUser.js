const bestUser = (req, res, next) => {
  const { user } = req.query;
  if (user === "ahmad") {
    //   go to the next line or pass this middleware only if the condition is meet.
    next();
  } else {
    res.send("Unauthorized");
  }
};

module.exports = bestUser;
