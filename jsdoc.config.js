const config = {
  source: {
    include: ["src"],
    exclude: ["node_modules"],
  },
  opts: {
    destination: "./docs",
    recurse: true,
  },
};

module.exports = config;
