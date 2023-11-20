const http = require("http");
const fs = require("fs");
const { dirname } = require("path");
// creating a server using raw node js

const server = http.createServer();

// server listener
server.on("request", (req, res) => {
  console.log("get= ", req.url,"method=", req.method);

  // reading text from file with a get request
  if(req.url === "/read-text" && req.method === "GET"){
    //  const readableStream = fs.createReadStream(__dirname + "./texts/read.txt")
    //  const readableStream = fs.createReadStream(process.cwd() +"./texts/read.txt")
    // const readableStream = fs.createReadStream("./texts/readbhul.txt") // if it goes wrong or error 

    const readableStream = fs.createReadStream("./texts/read.txt")
     readableStream.on("data", (buffer)=>{
      res.statusCode= 200
      res.write(buffer)
     })   
     readableStream.on("end", ()=>{
      res.statusCode= 200
      res.end("The streaming is over");
     })
     readableStream.on("error", ()=>{
      res.statusCode= 500
      res.end("something went wrong!");
     })
  }
 
  
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({
//       data: 'Hello World!',
//     }));
//   });
