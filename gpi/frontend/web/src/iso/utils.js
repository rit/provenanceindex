function noop (name) {
  let obj = {}
  obj[name] = () => {}
  return obj
}

function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
module.exports = {
  noop,
  sleep,
}
