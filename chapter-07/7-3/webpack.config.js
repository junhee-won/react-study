const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "test_treeshaking.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
            },
          },
        ],
      },
    ],
  },
  mode: "development",
  optimization: { minimizer: [] },
};
