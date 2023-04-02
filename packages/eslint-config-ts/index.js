// https://zh-hans.eslint.org/docs/latest/user-guide/getting-started
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint"
  ],
  // https://zh-hans.eslint.org/docs/latest/rules/
  rules: {
    "no-var": "error", // 禁止 var
    "default-case": "error", // 在switch语句中需要有default语句
    "no-async-promise-executor": "off", // async 处理器函数可以是异步的
    "@typescript-eslint/no-inferrable-types": "off", // 可以声明接口类型为 any
    "@typescript-eslint/no-explicit-any": "off", // 可以声明类型为 any
    "@typescript-eslint/ban-ts-comment": "off", // 允许特殊的注释, @ts-xxx
  }
}
