import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript'
import styles from 'rollup-plugin-styles'

export default {
  input: './public/index.tsx',
  output: {
    file: '.dev/index.js',
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
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
    }),
    typescript(),
    styles({
      modules: {
        generateScopedName: (name, file, css) => {
          if (file.includes('.module.')) {
            return `fui${name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`
          }
          return name
        }
      }
    })
  ]
}
