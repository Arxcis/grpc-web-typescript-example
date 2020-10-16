const path = require("path");

module.exports = {
  entry: "./build/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    usedExports: true,
    minimize: false,
  },
  plugins: [
    //new webpack.optimize.ModuleConcatenationPlugin()
  ],
};
