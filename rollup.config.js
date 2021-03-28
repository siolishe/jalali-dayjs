import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    name: 'jalali-dayjs',
    file: 'jalali-dayjs.min.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      include: './src/**/*.js',
      exclude: 'node_modules/**'
    })
  ]
}
