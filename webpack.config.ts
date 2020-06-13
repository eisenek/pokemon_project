import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import path from "path";
import { Configuration } from "webpack";

const webpackConfig = (env): Configuration => ({
  entry: "./src/app/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      components: path.resolve(__dirname, "./src/components/"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          configFile: "tsconfig.webpack.json",
        },
        exclude: /dist/,
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
});

export default webpackConfig;
