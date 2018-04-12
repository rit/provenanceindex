function noop (name) {
  let obj = {}
  obj[name] = () => {}
  return obj
}
module.exports = {
  noop,
}
