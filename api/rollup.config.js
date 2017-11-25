const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const flow = require('rollup-plugin-flow')

const DIR = './api'

rollup
  .rollup({
    input: `${DIR}/src/index.js`,
    external: id => id.includes(`node_modules`),
    plugins: [
      flow(),
      babel({ exclude: 'node_modules/**' }),
      resolve({ module: false }),
      commonjs({ sourceMap: false })
    ]
  })
  .then(bundle => {
    bundle.write({ format: 'cjs', file: `${DIR}/dist/cjs.js` })
    bundle.write({ format: 'es', file: `${DIR}/dist/es.js` })
  })
  .catch(err => console.error(err))
