import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import styles from 'rollup-plugin-styles'
import copy from 'rollup-plugin-copy'

export default {
  input: './dev/index.tsx',
  output: {
    file: './demo/script.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true
    }),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['src/**/*']
    }),
    typescript(),
    styles({
      modules: {
        generateScopedName: (name, file) => {
          if (file.includes('.module.')) {
            return `fui${name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`
          }
          return name
        }
      }
    }),
    copy({
      targets: [{ src: './src/styles/icons.css', dest: 'demo/public' }]
    })
  ]
}
