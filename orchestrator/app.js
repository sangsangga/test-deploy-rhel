require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
console.log(proces.env, "<<< env");
const { customerHttp, productHttp } = require("./helpers/axiosInstance");

app.get("/", (req, res, next) => {
  res.send("<h1>Orchestrator</h1>");
});
app.get("/customer", async (req, res, next) => {
  try {
    const response = await customerHttp.get("/");
    console.log(response.data, "<< response");
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/product", async (req, res, next) => {
  try {
    const response = await productHttp.get("/");
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
