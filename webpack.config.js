const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
							limit: 100000,
							fallback: 'file-loader',
							name: '[name].[ext]',
							publicPath: 'images/',
							outputPath: 'images/'
            },
          },
        ],
      },
    ],
  },
  devtool: "source-map",
};
