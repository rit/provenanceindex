const { aat2Label, yearRange } = require('iso/marq/utils')

const personResolver = {
  id (doc) {
    return doc.id
  },
  name (doc) {
    return doc.identified_by[0].label
  },
  activeTimespan (doc) {
    return yearRange(doc.carried_out)
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
  nationality (doc) {
    let attId = 'aat:300379842'
    let groups = doc.member_of
    return aat2Label({ attId, groups })
  },
  description (doc) {
    return doc.referred_to_by[0].label
  },
}

module.exports = personResolver
