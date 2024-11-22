const http = require("http");
const fs = require("fs");
const port = "5000";

// creating a server using raw node.js
const server = http.createServer();

// create a server lister
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");
  //streaming file 
  const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt");
  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });
  readableStream.on("end", () => {
    res.end("Finished!");
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
