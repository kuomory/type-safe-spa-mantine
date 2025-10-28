import * as fs from "node:fs";
import * as path from "node:path";
import { build } from "esbuild";

const __dirname = import.meta.dirname;

const ENV_VARS = Object.fromEntries(
  Object.entries(process.env).map(([key, value]) => {
    return [`process.env.${key}`, JSON.stringify(value)];
  }),
);

console.log("ENV_VARS");
console.log(ENV_VARS);

build({
  bundle: true,
  entryPoints: [path.resolve(__dirname, "src/index.ts")],
  external: fs.readdirSync("./node_modules"),
  format: "esm",
  minify: true,
  outdir: path.resolve(__dirname, "dist"),
  platform: "node",
  define: ENV_VARS,
}).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});
