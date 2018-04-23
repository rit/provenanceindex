const artObjectResolver = {
  id (doc) {
    return doc.id
  },

  /*
   * @casual sentence
   */
  label (doc) {
    return doc.identified_by[0].label
  },
}

module.exports = artObjectResolver
