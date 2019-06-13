import React, { Component } from 'react'

export default class Dogslist extends Component {
  state = {
    dogBreeds: null
  }
  // state handelsers
  updateBreeds(breeds) {
    this.setState({ dogBreeds: breeds })
  }

  // life time
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(myJson => Object.keys(myJson.message))
      .then(breeds => this.updateBreeds(breeds))
      .catch(console.error)
  }

  // render
  renderDogBreeds() {
    if (this.state.dogBreeds === null) {
      return 'loading...'
    }
    return this.state.dogBreeds
  }
  render() {
    return (
      <div className='dogs-list'>
        <h1>Dogs List</h1>

        { this.renderDogBreeds() }
      </div>
    )
  }
}
