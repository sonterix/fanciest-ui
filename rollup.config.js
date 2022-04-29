import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import styles from 'rollup-plugin-styles'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
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
        minimize: true,
        modules: {
          generateScopedName: (name, file, css) => {
            if (file.includes('.module.')) {
              return `fui${name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`
            }
            return name
          }
        }
      }),
      typescript({ include: 'src/**/*', tsconfig: './tsconfig.json' }),
      terser()
    ]
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()]
  }
]
