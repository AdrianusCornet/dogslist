import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogBreedImages extends Component {
  renderImages() {
    if (this.props.images === null) {
      return 'loading...'
    }
    return(
      this.props.images.map(image => {
        return (
          <img src={image} alt='dog' key={image} />
        )
      })
    )
  }
  render() {
    return (
      <div className="dog-breed-images">
        <h1>Dogs Breed images</h1>

        This page will show images of the {(this.props.breed)} breed.

      <Link to="/">Go back to the index</Link>
      <br/>
      {this.renderImages()}
      </div>
    )
  }
}
