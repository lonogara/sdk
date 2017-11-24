const rollup = require('rollup')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const flow = require('rollup-plugin-flow')
const json = require('rollup-plugin-json')

const DIR = './toreact'

rollup
  .rollup({
    input: `${DIR}/src/index.js`,
    external: [
      'path',
      'url',
      'util',
      'unified',
      'rehype-parse',
      'rehype-img-as',
      'rehype-react',
      'react',
      'remark-parse',
      'remark-rehype',
      'rehype-raw',
      // '../../../.packages/rehype-align',
      // '../../../.packages/rehype-blank'
      'hast-util-select'
    ],
    plugins: [
      json(),
      commonjs({ sourceMap: false }),
      resolve({ jsnext: true }),
      babel({
        exclude: 'node_modules/**'
        // externalHelpers: false,
        // runtimeHelpers: true
      }),
      flow()
    ]
  })
  .then(bundle => {
    bundle.write({ format: 'cjs', file: `${DIR}/dist/cjs.js` })
    bundle.write({ format: 'es', file: `${DIR}/dist/es.js` })
  })
  .catch(err => console.error(err))
