const { find, includes, map, reduce, each } = require('lodash')

function aat2Label ({ attId, groups }) {
  let found = find(groups, ({ classified_as }) => includes(classified_as, attId))
  return found.label
}

function makePairs(jsons) {
  return reduce(jsons, (acc, json) => {
    let keys = map(json.classified_as, ({ id }) => id)
    each(keys, (key) => {
      let tally = acc[key] || []
      tally.push(json)
      acc[key] = tally
    })
    return acc
  }, {})
}

function yearRange (timespans) {
  let { begin_of_the_begin, end_of_the_end } = timespans[0].timespan
  return map([begin_of_the_begin, end_of_the_end], year => year.split('-')[0]).join('-')
}


module.exports = {
  aat2Label,
  yearRange,
  makePairs,
}
