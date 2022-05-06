import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import styles from 'rollup-plugin-styles'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import dts from 'rollup-plugin-dts'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        assetFileNames: 'public/[name][extname]'
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        assetFileNames: 'public/[name][extname]'
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        include: ['src/**/*']
      }),
      styles({
        mode: ['extract', 'index.css'],
        minimize: true,
        modules: {
          generateScopedName: (name, file) => {
            if (file.includes('.module.')) {
              return `fui${name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`
            }
            return name
          }
        }
      }),
      typescript({ include: 'src/**/*', tsconfig: './tsconfig.json' }),
      terser(),
      copy({
        targets: [
          { src: './src/styles/icons.css', dest: 'dist/cjs/public' },
          { src: './src/styles/icons.css', dest: 'dist/esm/public' }
        ]
      })
    ]
  },
  {
    input: './dist/esm/types/index.d.ts',
    output: [{ file: './dist/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()]
  }
]
