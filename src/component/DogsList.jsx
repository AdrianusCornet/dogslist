import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogsList extends Component {
  renderDogBreeds() {
    if (this.props.dogBreeds === null) {
      return 'loading...'
    }
    return (
      this.props.dogBreeds.map(breed => {
        return (
          <li key={breed}>
            <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
          </li>)
      })
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
