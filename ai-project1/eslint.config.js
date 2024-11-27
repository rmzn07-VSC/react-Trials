module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    browser: true // Tarayıcı ortamı için eklendi
  },
  extends: ["eslint:recommended", "google", "plugin:react/recommended"], //React kuralları eklendi
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }
  },
  plugins: ["react"], // React plugin eklendi.
  rules: {
    "require-jsdoc": 0,
    "no-shadow": 0,
      "react/prop-types":0, // gereksiz prop-type uyarılarını kapatıyor
      "react/jsx-no-target-blank":'off'
  },
  settings: {
    react: { version: "detect" }, // React versiyonunu otomatik olarak bulur.
  },

};