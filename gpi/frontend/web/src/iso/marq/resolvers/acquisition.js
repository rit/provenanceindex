const acquisitionResolver = {
  id (doc) {
    return doc.id
  },

  label (doc) {
    return doc.classified_as[0].label
  },

  dateOfTransaction (doc) {
    return doc.timespan.begin_of_the_begin
  },

  buyer (doc) {
    // TODO: Dereference the actors in doc.transferred_title_to[]
    return 'Some buyer'
  },

  seller (doc) {
    // TODO: Dereference the sellers in doc.transferred_title_from[]
    return 'Some seller'
  },

  artObjects (doc) {
    // TODO: Dereference the transferred_title_of in doc.transferred_title_of[]
    return [
      { id: 'a1' },
    ]
  },

  payments (doc) {
    // TODO: Dereference the consists_of field
    return []
  },
}

module.exports = acquisitionResolver
