import assert from 'assert'
import unified from 'unified'
import m2h from '../.src/unified/m2h.js'
import ih2r from '../.src/unified/ih2r.js'
import eh2r from '../.src/unified/eh2r.js'
import em2r from '../.src/unified/em2r.js'

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

const test = (preset, target) => () => unified().use(preset()).process(target)

it(`m2h`, test(m2h, md))
it(`ih2r`, test(ih2r, html))
it(`eh2r`, test(eh2r, html))
it(`em2r`, test(em2r, md))