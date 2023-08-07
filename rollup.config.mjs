import { defineConfig } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
// 模拟 Node.js 全局变量在浏览器环境中的存在
import globals from 'rollup-plugin-node-globals'
// 自动为代码注入node内置模块的替代实现
import builtins from 'rollup-plugin-node-builtins'
// 
import dts from 'rollup-plugin-dts'
import ts from 'rollup-plugin-typescript2'
// 代码压缩
import terser from '@rollup/plugin-terser'
// 模块自动导入并导出
import { importExportPlugin } from 'rollup-plugin-import-export'

const config = defineConfig([
    {
        input: ['src/index.ts'],
        output: [
            {
                dir: 'dist/esm',
                format: 'esm',
                preserveModules: true, // 开启这个选项会将每个模块单独打包，有利于摇树优化
            },
            {
                dir: 'dist/cjs',
                format: 'cjs',
                preserveModules: true,
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babel({
                babelHelpers: 'bundle' //将helpers代码打包到产物中 
            }),
            commonjs(),
        ],
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/umd/index.js',
                format: 'umd',
                name: 'utils',
            },
        ],
        plugins: [
            importExportPlugin(),
            ts(),
            babel(),
            commonjs(),
            resolve({ preferBuiltins: true, mainFields: ['browser'] }),
            globals(),
            builtins(),
            terser(),
        ],
    },
    {
        input: 'src/index.ts',
        output: {
            dir: 'dist/types',
            format: 'esm',
            preserveModules: true,
        },
        plugins: [
            importExportPlugin(),
            dts(),
        ],
    },
])

export default config
