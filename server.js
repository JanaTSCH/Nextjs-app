const { createServer } = require("http");
const { parse } = require("url");

const server = createServer((req, res) => {
  const pathName = parse(req.url, true).pathname;

  if (pathName === "/") {
    return res.end("Hello World!");
  } else if (pathName === "/test") {
    return res.end("TEST");
  } else {
    return res.end("URL can't be found");
  }
});

server.listen(8000, () => console.log("Listening on port 8000"));
