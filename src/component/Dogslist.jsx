import React, { Component } from 'react'

export default class Dogslist extends Component {
  state = {
    dogBreeds: 'potato',
  }
  
  renderDogBreads() {
    return this.state.dogBreeds === null && 'loading...'
  }
  render() {
    return (
      <div className='dogs-list'>
        <h1>Dogs List</h1>

        { this.state.dogBreeds === null && 'loading...' }
      </div>
    )
  }
}
