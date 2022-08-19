const http = require("http");
const { readFileSync } = require("fs");

const hostname = "localhost";
const port = 5000;

const homePage = readFileSync("./navbar/navbar.html");
const homeImg = readFileSync("./navbar/assets/logo.svg");
const homeStyle = readFileSync("./navbar/style.css");
const homeLogic = readFileSync("./navbar/browser.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  //about page
  // if (url === "/about") {
  //   res.writeHead(200, { "content-type": "text/html" });
  //   res.write("<h1>about page</h1>");
  //   res.end();
  // }
  //css page
  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  //javascript page
  else if (url === "/browser.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  //logo part
  else if (url === "/assets/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImg);
    res.end();
  }
  //404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`The server is listening at http://${hostname}: ${port}`);
});
