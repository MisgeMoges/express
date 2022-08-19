const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("user hits the resource");

  res.status(200).send("welcome to our home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resouce not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
