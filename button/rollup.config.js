const rollup = require('rollup')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const flow = require('rollup-plugin-flow')

const DIR = './button'

rollup
  .rollup({
    input: `${DIR}/src/index.js`,
    plugins: [
      flow(),
      babel({ exclude: 'node_modules/**' }),
      commonjs({ sourceMap: false })
    ]
  })
  .then(bundle => {
    bundle.write({ format: 'cjs', file: `${DIR}/dist/cjs.js` })
    bundle.write({ format: 'es', file: `${DIR}/dist/es.js` })
  })
  .catch(err => console.error(err))
