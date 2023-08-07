{
  "presets": [
    ["@babel/preset-env", {
      "targets": "defaults",
      "useBuiltIns": "usage",
      "corejs": 3,
      "modules": false,
      "helpers": true
    }]
  ],
  "plugins": [],
  "babelHelpers": "inline",
  "exclude": "node_modules/**"
}
