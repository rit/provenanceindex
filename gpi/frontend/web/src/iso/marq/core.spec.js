const { yearRange } = require('./utils')

const timespans = [
  {
    'timespan': {
      'begin_of_the_begin': '1631-01-01',
      'end_of_the_end': '1669-01-01',
    },
  },
]

describe('yearRange', () => {
  it('shows year range', function () {
    expect(yearRange(timespans)).to.equal('1631-1669')
  })
})
