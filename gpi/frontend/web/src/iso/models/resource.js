class Resource {
  blurbFields () {
    throw Error('Not Implemented')
  }

  heading () {
    throw Error('Not Implemented: should be the resource\'s name or label')
  }

  relatedCountBadges () {
    throw Error('Not Implemented')
  }
}

module.exports = Resource
