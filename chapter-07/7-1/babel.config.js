const presets = ["@babel/preset-react"];
const plugins = [
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-arrow-functions",
];
const env = {
  production: {
    presets: ["minify"],
  },
};

module.exports = { presets, plugins, env };
