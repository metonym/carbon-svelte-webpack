const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const AutoprefixerPlugin = require("autoprefixer");

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PROD = NODE_ENV === "production";

const paths = {
  entry: path.resolve(__dirname, "src/index.js"),
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
  template: path.resolve(__dirname, "public/index.html"),
};

module.exports = {
  mode: NODE_ENV,
  stats: "errors-only",
  devServer: { historyApiFallback: true },
  devtool: IS_PROD
    ? process.env.ENABLE_SOUCE_MAP === "true"
      ? "source-map"
      : false
    : "cheap-eval-source-map",
  entry: { bundle: [paths.entry] },
  resolve: {
    alias: { svelte: path.resolve("node_modules", "svelte") },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: { path: paths.build, filename: "[name].[chunkhash].js" },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: { loader: "svelte-loader", options: { hotReload: true } },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/],
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                AutoprefixerPlugin({
                  overrideBrowserslist: ["last 1 version", "ie >= 11"],
                }),
              ],
            },
          },
          "sass-loader",
        ],
      },
      { test: /\.(png|jpe?g|svg)$/i, use: [{ loader: "file-loader" }] },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({ patterns: [{ from: paths.public }] }),
    new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
    new OptimizeCssAssetsPlugin({}),
    new HtmlWebpackPlugin({ template: paths.template }),
  ],
};
