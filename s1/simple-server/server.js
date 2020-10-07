const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong123");
});

app.listen(8080);
