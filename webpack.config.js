const path = require("path");
const webpack = require("webpack");
const packageData = require("./package.json");

module.exports = {
  entry: {
    // Point "entry" to scripts you want to be CLI-eligible.
    // mainrelay: "./src/main-ts.ts",
    main: "./src/main.ts",
    buttontest: "./src/buttonTest.ts",
  },
  mode: "production",
  devtool: false,
  output: {
    // Change the final string here to the name you want your script to use in mafia.
    path: path.resolve(__dirname, "KoLmafia", "relay", packageData.name),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    // Disable compression because it makes debugging more difficult for KolMafia
    minimize: false,
  },
  performance: {
    // Disable the warning about assets exceeding the recommended size because this isn't a website script
    hints: false,
  },
  plugins: [],

  externals: {
    // Add any ASH scripts you would like to use here.
    kolmafia: "commonjs kolmafia",
    "canadv.ash": "commonjs canadv.ash",
  },
};
