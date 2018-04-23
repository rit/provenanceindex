const personResolver = {
  id (doc) {
    return doc.id
  },
  name (doc) {
    return doc.identified_by[0].label
  },
  activities (doc) {
    return doc.carried_out
  },
  dateOfBirth (doc) {
    return doc.brought_into_existence_by.timespan.begin_of_the_begin
  },
  dateOfDeath (doc) {
    return doc.taken_out_of_existence_by.timespan.begin_of_the_begin
  },
  placeOfBirth (doc) {
    return doc.brought_into_existence_by.took_place_at[0].label
  },
  placeOfDeath (doc) {
    return doc.taken_out_of_existence_by.took_place_at[0].label
  },
}

module.exports = personResolver
