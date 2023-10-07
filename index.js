const express = require("express");
const app = express();
const pool = require("./queries.js");
const router = require("./router.js");

app.use("/", router);

pool.connect((err, res) => {
  console.log("connected");
});

app.listen(3000);
