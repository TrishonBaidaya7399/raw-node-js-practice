const fs = require("fs");

// Synchronous Way ---------------------------------------------------------
//reading a file
const readText = fs.readFileSync("./read.txt", "utf-8");
console.log(readText);
// writing a text
const writtenText = fs.writeFileSync(
  "../texts/write.txt",
  readText + "This is my written text"
);
console.log(writtenText);

//Asynchronous Way ---------------------------------------------------------
const fs = require("fs");
//reading a file
fs.readFile("./read.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
// writing a text
fs.writeFile(
  "../texts/write.txt",
  readText + "This is my written text",
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  }
);
