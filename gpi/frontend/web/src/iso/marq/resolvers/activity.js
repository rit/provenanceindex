const activityResolver = {
  label (doc) {
    return 'Painter'
  },
  beginning (doc) {
    return doc.timespan.begin_of_the_begin
  },
  ending (doc) {
    return doc.timespan.end_of_the_end
  },
}

module.exports = activityResolver
