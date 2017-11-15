const createGlobalName = () => {
  const random = Math.floor(Math.random() * 10000 + 1)
  const name = `jsonp_callback_${random}`
  return window[name] ? createGlobalName() : name
}

const createScript = src => {
  const script = document.createElement('script')
  script.src = src
  return script
}

const createClean = ({ script, globalName, resolve, reject }) => {
  return { succeed, fail }

  function succeed(res) {
    resolve(res)
    rm()
  }
  function fail(parseError) {
    reject(parseError)
    rm()
  }
  function rm() {
    removeScript(script)
    deleteGlobalName(globalName)
  }
}

const appendScript = script => document.head.appendChild(script)
const removeScript = script => document.head.removeChild(script)
const deleteGlobalName = globalName => {
  delete window[globalName]
}

export default (src, limit = 2000) =>
  new Promise((resolve, reject) => {
    const globalName = createGlobalName()
    const script = createScript(`${src}&callback=${globalName}`)
    const { succeed, fail } = createClean({
      script,
      globalName,
      resolve,
      reject
    })

    const timeout = setTimeout(() => fail(true), limit)

    script.onerror = () => {
      clearTimeout(timeout)
      fail()
    }

    window[globalName] = res => {
      clearTimeout(timeout)
      succeed(res)
    }

    appendScript(script)
  })
