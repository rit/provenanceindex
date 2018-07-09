const Resource = require('./resource')

class ArtObject extends Resource {
  constructor (props) {
    super(props)

    // Required props
    this.id = props.id
    this.label = props.label

    // Optional props
    this.artist = props.artist
    this.dateOfCreation = props.dateOfCreation
    this.placeOfCreation = props.placeOfCreation
    this.attributions = props.attributions
    this.stockbookLabel = props.stockbookLabel
    this.medium = props.medium
    this.material = props.material
    this.dimensions = props.dimensions
    this.technique = props.technique
    this.subject = props.subject
    this.style = props.style
    this.description = props.description

    // TODO: Replace hard-coded values with `props` argument
    this.imageUrl = '/static/images/placeholder.png'
    this.qualifier = 'Object - Painting'

    // Vue specific helper props
    this.ui = {
      icon: 'paint-brush',
    }
  }
}
