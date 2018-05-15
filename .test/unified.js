import assert from 'assert'
import unified from 'unified'
import * as presets from '../.src/unified'

const md = `
# title
- hoge
- fuga

1. hoge
2. fuga
`

const html = `
<div>
  <span>span</span>
  <svg viewBox="0 0 600 600"></svg>
</div>
`

const test = (name, target) => () => unified().use(presets[name]()).process(target)

it(`m2h`, test('m2h', md))
it(`ih2r`, test('ih2r', html))
it(`eh2r`, test('eh2r', html))
it(`em2r`, test('em2r', md))