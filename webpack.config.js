const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoprefixerPlugin = require("autoprefixer");
const { optimizeImports } = require("carbon-preprocess-svelte");

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PROD = NODE_ENV === "production";

const paths = {
  entry: path.resolve(__dirname, "src/index.js"),
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
};

module.exports = {
  mode: NODE_ENV,
  stats: "errors-only",
  devServer: { hot: true, historyApiFallback: true },
  devtool: IS_PROD ? false : "source-map",
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
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: [optimizeImports()],
            hotReload: true,
          },
        },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/],
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  AutoprefixerPlugin({
                    overrideBrowserslist: ["last 1 version", "ie >= 11"],
                  }),
                ],
              },
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
    new MiniCssExtractPlugin({
      filename: IS_PROD ? "[name].[chunkhash].css" : "[name].css",
    }),
    // new OptimizeCssAssetsPlugin({}),
    new HtmlWebpackPlugin({
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
          </head>
          <body></body>
        </html>
      `,
    }),
  ],
};
