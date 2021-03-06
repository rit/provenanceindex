const rembrandt = require('iso/json-ld/rembrandt')
const { parser } = require('iso/marq')

// To be used as mocked data for Vue component's data
const ResourceTypes = [
  {name: 'Object', logo: 'object_logo', count: 80012, description: 'An Object is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'first'},
  {name: 'Person / Institution', logo: 'person_logo', count: 75042, description: 'A Person / Institution is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'second'},
  {name: 'Provenance Event', logo: 'event_logo', count: 100019, description: 'A Provenance Event is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'third'},
  {name: 'Document', logo: 'document_logo', count: 50077, description: 'A Document is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'fourth'},
]

async function makeRembrandt () {
  let context = { id: 'pixel-123' }
  let doc = rembrandt
  let res = await parser.walk({ doc, context })
  if (res.errors) {
    throw res.errors
  }
  let props = res.data.person
  return props
}

module.exports = {
  ResourceTypes,
  makeRembrandt,
}
