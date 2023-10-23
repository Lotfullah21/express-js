const express = require("express");
const router = express.Router();

// Posting data to this route, we deal with "/login" in app.
router.post("/", (req, res) => {
  // req.body gives us the body info that we are sending like name, and other props we are submitting in form.
  console.log(req.body);
  // name is the property we got from input and it acts as a key to the data we are sending.
  const name = req.body.name;
  if (name) {
    return res.status(200).send(`${name} data had been submitted`);
  } else {
    res.status(403).send("unauthorized");
  }
});

module.exports = router;
