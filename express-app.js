const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// app.get('/', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, "./navbar/navbar.html"))
// })

app.all("*", (req, res) => {
  res.send("<h1>Resource not found</h1>");
});

app.listen(5000, () => {
  console.log("servr is listening on port 5000...");
});
