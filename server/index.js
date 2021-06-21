/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

// app.use(express.static("dist"));

app.set("dist", path.join(__dirname, "dist"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
