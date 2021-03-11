module.exports = {
  apps: [
    {
      name: "Orchestrator",
      script: "cd orchestrator && npm install && node app.js",
    },
    {
      name: "Services-Customer",
      script: "cd services && cd customer && npm install && node app.js",
    },
    {
      name: "Services-Product",
      script: "cd services && cd product && npm install && node app.js",
    },
  ],
};
