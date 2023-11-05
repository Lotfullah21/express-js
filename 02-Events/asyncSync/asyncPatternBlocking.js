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
