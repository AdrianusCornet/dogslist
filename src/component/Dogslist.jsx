import React, { Component } from 'react'

export default class Dogslist extends Component {
  state = {
    dogBreeds: null
  }

  // life time
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(myJson => myJson.message)
      .then(console.log)
      .catch(console.error)
  }

  // render
  renderDogBreads() {
    if (this.state.dogBreeds === null) {
      return 'loading...'
    }
    return this.state.dogBreeds
  }
  render() {
    return (
      <div className='dogs-list'>
        <h1>Dogs List</h1>

        { this.renderDogBreads() }
      </div>
    )
  }
}
