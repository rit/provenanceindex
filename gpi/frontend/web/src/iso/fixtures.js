// To be used as mocked data for Vue component's data
const ResourceTypes = [
  {name: 'Object', logo: 'object_logo', count: 80012, description: 'An Object is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'first'},
  {name: 'Person / Institution', logo: 'person_logo', count: 75042, description: 'A Person / Institution is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'second'},
  {name: 'Provenance Event', logo: 'event_logo', count: 100019, description: 'A Provenance Event is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'third'},
  {name: 'Document', logo: 'document_logo', count: 50077, description: 'A Document is: Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit', position: 'fourth'},
]

const Person = {
  id: 1,
  name: 'Rembrandt van Rijn',
  qualifier: '(Person: Artist)',
  image: 'placeholder',
  birth: 'July 15, 1606 in Leiden, Netherlands',
  death: 'October 4, 1669 in Amsterdam, Netherlands',
  nationality: 'Dutch',
  role: 'Artist',
  active_info: '1631-1669 Amsterdam (North Holland, Netherlands) (inhabited place)',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatisefficitur. Sit amet, consectetur adipiscing elit. Maecenas ac tellus eu leo imperdiet finibus sit amet a risus. Fusce laoreet ante purus, id euismod enim facilisis et. Nulla vulputate est sed tempus auctor. Nulla mollis orci libero, ut tempus diam suscipit quis. Aenean auctor consectetur justo non pharetra. Suspendisse sodales magna eu dolor rutrum, ac pulvinar nunc porttitor. Ut sem massa, rhoncus id tellus vitae, faucibus faucibus elit.',
  events: 972,
  objects: 429,
}

module.exports = {
  ResourceTypes,
  Person,
}
