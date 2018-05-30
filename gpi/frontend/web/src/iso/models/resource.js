class Resource {
  blurbFields () {
    throw Error('Not Implemented')
  }

  heading () {
    throw Error('Not Implemented: should be the resource\'s name or label')
  }
}

module.exports = Resource
