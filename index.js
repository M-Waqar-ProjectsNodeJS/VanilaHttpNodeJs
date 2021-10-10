// console.log("hello world");
const http = require("http");
const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    //response headers
    res.writeHead(200, { "Content-Type": "text/html" });
    //set the response
    res.write(
      "<h1> Home Page </h1> <p>Hi there, This is a Vanilla Node.js API</p>"
    );
    //end the response
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Api End Point");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
