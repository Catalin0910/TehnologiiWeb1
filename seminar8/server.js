const express = require("express");
const bodyParser = require("body-parser");
const kittenRouter = require("./routers/kitten-routers");

const app = express();
app.locals.kittens = [];
for (let i = 0; i < 100; i++) {
  app.locals.kittens.push({
    id: i,
    name: "kitten " + i,
    color: "some color",
    weight: i % 10,
  });
}

app.use((req, res, next) => {
  //   res.status(401).json({ message: "not allowed" });
  console.log(`requested: ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  if (req.headers["kitten-secret"] === "supersecret") {
    next();
  } else {
    res.status(401).json({ message: "you need a secret to proceed" });
  }
});

app.use("/kitten-api", kittenRouter);

app.listen(8080);
