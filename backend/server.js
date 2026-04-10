const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*", // allow all (ok for testing)
  });

  res.end("Hello from EC2 backend 🚀");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
