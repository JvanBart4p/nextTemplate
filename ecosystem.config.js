module.exports = {
  apps: [
    {
      name: "dcgs-portal-3006",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/next/dist/bin/next.js",
      args: "start",
      time: true,
    },
  ],
};
