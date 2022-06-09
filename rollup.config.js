import typescript from "@rollup/plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve, { DEFAULTS } from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/index.js",
        format: "esm",
      },
      {
        file: "dist/index.umd.js",
        format: "umd",
      },
    ],

    plugins: [
      commonjs(),
      typescript(),
      nodeResolve({
        extensions: [...DEFAULTS.extensions, ".ts"],
        moduleDirectories: ["node_modules"],
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
      {
        file: "dist/index.cjs.d.ts",
        format: "cjs",
      },
    ],
    external: [/\.(le|sc|c|sa)ss$/, /\.stylus/],
    plugins: [dts()],
  },
];
