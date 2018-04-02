class Artist {
  constructor ({ id, name }) {
    this.id = id
    this.name = name
  }
}

class ResourceType {
  constructor ({ name, description, count, position, image }) {
    this.name = name
    this.description = description
    this.count = count
    this.position = position
    this.image = image
  }

  imageUrl () {
    return `@static/${this.image}` 
  }
}


module.exports = {
  Artist,
  ResourceType,
}
