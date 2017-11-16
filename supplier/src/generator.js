import jsonp from './jsonp.js'

const isThrow = target => typeof target !== 'number'
const message = `total is required as "number"`

const isReturn = (offset, total) => {
  const nowMaxOffset = offset + 19
  const lastOffset = total - 1
  return nowMaxOffset >= lastOffset
}

export default function* g(createSrc) {
  let offset = 0
  const firstSrc = createSrc(offset)

  const total = yield jsonp(firstSrc)
  if (isThrow(total)) throw new Error(message)
  if (isReturn(offset, total)) return
  yield

  offset += 20

  do {
    const src = createSrc(offset)

    if (isReturn(offset, total)) return jsonp(src)

    yield jsonp(src)
    offset += 20
  } while (true)
}
