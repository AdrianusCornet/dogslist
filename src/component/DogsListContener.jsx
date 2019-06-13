import React, { Component } from 'react';
import DogsList from './DogsList'

export default class DogsListContener extends Component {
  state = { dogBreeds: null }

  updateBreeds(breeds) {
    this.setState({ dogBreeds: breeds })
  }
  
  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(myJson => Object.keys(myJson.message))
      .then(breeds => this.updateBreeds(breeds))
      .catch(console.error)
  }
  
  render() {
    return < DogsList dogBreeds={this.state.dogBreeds} />
  }
}
