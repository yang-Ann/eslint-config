// https://zh-hans.eslint.org/docs/latest/user-guide/getting-started
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    "react": {
      "version": "999.999.999"
    }
  },
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  // https://zh-hans.eslint.org/docs/latest/rules/
  rules: {
    "default-case": "error", // 在switch语句中需要有default语句
    "react/react-in-jsx-scope": "off", // 作用域必须要有 React 变量名
    "react/display-name": "warn", // 定义组件必须要指定变量名后暴露(不能直接暴露)
    "no-async-promise-executor": "off", // async 处理器函数可以是异步的
    "@typescript-eslint/no-explicit-any": "off", // 可以声明类型为 any
    "@typescript-eslint/ban-ts-comment": "off", // 允许特殊的注释, @ts-xxx
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}