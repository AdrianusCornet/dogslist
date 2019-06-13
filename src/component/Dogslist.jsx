import React, { Component } from 'react'

export default class Dogslist extends Component {
  state = {
    dogBreeds: null
  }
  
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
