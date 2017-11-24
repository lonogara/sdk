const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const flow = require('rollup-plugin-flow')

const DIR = './api'

rollup
  .rollup({
    input: `${DIR}/src/index.js`,
    plugins: [
      flow(),
      resolve({ jsnext: true }),
      commonjs(),
      babel({
        exclude: 'node_modules/**'
        // externalHelpers: false,
        // runtimeHelpers: true
      })
    ],
    external: ['jsonp-simple', 'regenerator-runtime']
  })
  .then(bundle => {
    bundle.write({ format: 'cjs', file: `${DIR}/dist/cjs.js` })
    bundle.write({ format: 'es', file: `${DIR}/dist/es.js` })
  })
  .catch(err => console.error(err))
