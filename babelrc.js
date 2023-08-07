{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.6.4",
        "modules": false  // 避免 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS ，导致 Rollup 的一些处理失败。
      },
      "@babel/preset-typescript"
    ]
  ],
  "exclude": "node_modules/**"
}