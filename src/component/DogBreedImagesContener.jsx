import React, { Component } from 'react'
import DogBreedImages from './DogBreedImages'

export default class DogBreedImagesContener extends Component {
  state = {
    images: null
  }
  updateImages(images) {
    this.setState({
      images: images
    })
  }

  componentDidMount() {
    const breed = this.props.match.params.breed
    fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => response.json())
      .then(myJson => this.updateImages(myJson.message))
      .catch(console.error)
  }

  render() {
    return (
      < DogBreedImages
        breed ={this.props.match.params.breed}
        images={this.state.images} />
    )
  }
}
