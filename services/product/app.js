require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
  res.send("<h1>Product Service</h1>");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
