const Resource = require('./resource')

class Purchase extends Resource {
  constructor (props) {
    super(props)
    this.qualifier = 'purchase'

    // Required props
    this.id = props.id
    this.label = props.label

    // Optional props
    this.dateOfTransaction = props.dateOfTransaction
    this.buyers = props.buyers
    this.sellers = props.sellers
    this.artObjects = props.artObjects
    this.payments = props.payments

    // Vue specific helper props
    this.ui = {
      // TODO this should be 'exchange'
      icon: 'handshake',
    }
  }

  blurbFields () {
    return [
      ['Purchased from', 'Some seller'],
      ['Date', this.dateOfTransaction],
      ['Objects', 'object 1, object 2'],
    ]
  }

  heading () {
    return `${this.label}`
  }

  relatedCountBadges () {
    // TODO: Determine how to get these data
    return [
      { type: 'document', count: 20 },
      { type: 'event', count: 30 },
      { type: 'object', count: 40 },
    ]
  }
}

module.exports = Purchase
