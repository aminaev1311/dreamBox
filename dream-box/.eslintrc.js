module.exports = {
  extends: [
    "plugin:promise/recommended",
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "eslint:recommended",
    "@vue/prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        "no-undef": false,
        semi: true,
        printWidth: 100,
        tabWidth: 2,
        semicolons: true,
      },
    ],
    "promise/param-names": "off",
    "promise/catch-or-return": "off",
    "vue/html-self-closing": "off",
    "vue/attributes-order": "off",
    "vue/no-mutating-props": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
  },
};
