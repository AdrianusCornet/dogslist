import React, { Component } from 'react'

export default class DogsList extends Component {
  renderDogBreeds() {
    if (this.props.dogBreeds === null) {
      return 'loading...'
    }
    return (
      this.props.dogBreeds
        .map(breed => <li key={breed}>{breed}</li>)
    )
  }
  render() {
    return (
      <div className='dogs-list'>
        <h1>Dogs List</h1>
        <br />
        <ul>
          {this.renderDogBreeds()}
        </ul>
      </div>
    )
  }
}
