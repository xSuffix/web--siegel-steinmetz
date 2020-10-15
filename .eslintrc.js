module.exports = {
  plugins: [
    "vue"
  ],
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    // "prettier"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  // browserslist: [
  //   "> 1%",
  //   "last 2 versions",
  //   "not dead"
  // ],
  rules: {
    "semi": 1
  }
};
