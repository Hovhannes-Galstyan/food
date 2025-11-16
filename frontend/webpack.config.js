import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "production",
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/js"),
  },
  watch: true,
  devtool: "source-map",
  module: {},
};
