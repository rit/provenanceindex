function parse(query) {
}

function spec({ component, props }) {
  if (!component) throw new Error('Component name is required')
  let q = encodeURIComponent(JSON.stringify({ component, props }))
  return `/vspec?q=${q}`
}

module.exports = {
  parse,
  spec,
}
