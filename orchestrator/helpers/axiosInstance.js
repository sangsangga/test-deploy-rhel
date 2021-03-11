const axios = require("axios");

const customerHttp = axios.create({
  baseURL: "http://localhost:4001",
});

const productHttp = axios.create({
  baseURL: "http://localhost:4002",
});

module.exports = { customerHttp, productHttp };
