const fs = require('fs');
// reading a file text
const readText= fs.readFileSync("./texts/read.txt", "utf-8");
console.log(readText)

//writing a file
const writtenText =fs.writeFileSync("./texts/read.txt", readText+ "\nThis is my written text")

console.log(writtenText)
