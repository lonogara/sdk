import babel from 'rollup-plugin-babel'
import autoexternal from 'rollup-plugin-auto-external'
import prettier from 'rollup-plugin-prettier'

const Config = (name) => ({
  input: `.src/${name}/index.js`,
  output: [
    { format: 'cjs', file: `${name}/cjs.js`, exports: 'named' },
    { format: 'es', file: `${name}/es.js`, exports: 'named' }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    autoexternal({ builtins: true, dependencies: true }),
    prettier({ tabWidth: 2, semi: false, singleQuote: true })
  ]
})

export default [
  Config('button'),
  Config('preloader'),
  Config('unified')
]