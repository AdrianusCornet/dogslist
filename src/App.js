import React from 'react';
import './App.css';
import DogsListContainer from './component/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContener from './component/DogBreedImagesContener';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DogsListContainer} />
        <Route path='/dog-breeds/:breed' component={DogBreedImagesContener} />
      </div>
    );
  }
}

export default App;
