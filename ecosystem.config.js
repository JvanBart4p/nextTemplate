module.exports = {
  apps: [
    {
      name: "next-template-3009",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      time: true,
    },
  ],
};
