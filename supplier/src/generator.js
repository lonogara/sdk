import jsonp from './jsonp.js'

const isThrow = target => typeof target !== 'number'
const message = `total is required as "number"`

const isReturn = (total, offset) => {
  const lastOffset = total - 1
  const acquiredOffset = offset + 19
  return acquiredOffset >= lastOffset
}

export default function* generator(createSrc) {
  let offset = 0
  const firstSrc = createSrc(offset)

  const total = yield jsonp(firstSrc)
  if (isThrow(total)) throw new Error(message)
  if (isReturn(total, offset)) return
  yield

  while (true) {
    const src = createSrc((offset += 20))

    if (isReturn(total, offset)) {
      return jsonp(src)
    }

    yield jsonp(src)
  }
}
