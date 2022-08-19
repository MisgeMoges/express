const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(logger, authorize);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("products page");
});

app.get("/api/items", (req, res) => {
  res.send("items Page");
});
