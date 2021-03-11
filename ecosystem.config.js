module.exports = {
  apps: [
    {
      name: "Orchestrator",
      script: "cd orchestrator && npm install && node app.js",
      env: {
        PORT: 4000,
      },
    },
    {
      name: "Services-Customer",
      script: "cd services && cd customer && npm install && node app.js",
      env: {
        PORT: 4001,
      },
    },
    {
      name: "Services-Product",
      script: "cd services && cd product && npm install && node app.js",
      env: {
        PORT: 4002,
      },
    },
  ],
};
