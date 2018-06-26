const artObjectResolver = {
  id (doc) {
    return doc.id
  },

  label (doc) {
    if (!doc.identified_by) return 'Label is missing'
    return doc.identified_by[0].label
  },

  artist (doc) {
    return 'TBD artist'
  },

  dateOfCreation (doc) {
    return 'TBD dateOfCreation'
  },

  placeOfCreation (doc) {
    return 'TBD placeOfCreation'
  },

  attributions (doc) {
    return 'TBD attributions'
  },

  stockbookLabel (doc) {
    return 'TBD stockbookLabel'
  },

  medium (doc) {
    return 'TBD medium'
  },

  material (doc) {
    return 'TBD material'
  },

  dimensions (doc) {
    return 'TBD dimensions'
  },

  technique (doc) {
    return 'TBD technique'
  },

  subject (doc) {
    return 'TBD subject'
  },

  style (doc) {
    return 'TBD style'
  },

  description (doc) {
    return 'TBD description'
  },

}

module.exports = artObjectResolver
