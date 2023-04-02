// https://zh-hans.eslint.org/docs/latest/user-guide/getting-started
module.exports = {
  extends: [
    "plugin:react/recommended",
    "@anlib/eslint-config-ts",
  ],
  settings: {
    react: {
      version: "999.999.999"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "react",
    "react-hooks",
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // 作用域必须要有 React 变量名
    "react/display-name": "warn", // 定义组件必须要指定变量名后暴露(不能直接暴露)
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}