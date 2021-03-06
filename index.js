const express = require("express");

const app = express();

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about-page.html");
});

  app.get("/works", (request, response) => {
    response.sendFile(__dirname + "/views/works-page.html");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`port 3000 is live on ${PORT}`);
});
