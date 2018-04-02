class Artist {
  constructor ({ id, name }) {
    this.id = id
    this.name = name
  }
}

class ResourceType {
  constructor ({ name, description, count, position, logo }) {
    this.name = name
    this.description = description
    this.count = count
    this.position = position
    this.image = logo
  }

  localeCount () {
    return this.count.toLocaleString()
  }

  imageUrl () {
    return `./${this.image}.png`
  }

  question () {
    return `What's ${this.article()} ${this.name}`
  }

  article () {
    // TODO consult with an English grammar expert
    if (this.name.startsWith('O')) { return 'an' }
    return 'a'
  }
}

module.exports = {
  Artist,
  ResourceType,
}
