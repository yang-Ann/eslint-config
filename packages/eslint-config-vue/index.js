// https://zh-hans.eslint.org/docs/latest/user-guide/getting-started
module.exports = {
  extends: [
    "plugin:vue/vue3-essential",
    "@anlib/eslint-config-ts",
  ],
  parser: "vue-eslint-parser",
  plugins: [
    "vue",
  ],
  rules: {
    "vue/multi-word-component-names": "off", // 组件名称不需要多个单词
  }
}