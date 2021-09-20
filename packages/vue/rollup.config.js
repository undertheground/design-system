import commonjs from "@rollup/plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import buble from "@rollup/plugin-buble"; // Transpile/polyfill with reasonable browser support
import typescript from "rollup-plugin-typescript2";
import pug from "rollup-plugin-pug";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";

import packageJson from "./package.json";

export default {
  input: "src/index.ts", // Path relative to package.json
  output: {
    name: "Button",
    exports: "named"
  },
  plugins: [
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    pug(),
    excludeDependenciesFromBundle({
      peerDependencies: true,
      dependencies: true
    }),
    typescript({ include: [/\.tsx?$/, /\.vue\?.*?lang=ts/] }),
    commonjs()
  ]
};
