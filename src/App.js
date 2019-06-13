import React from 'react';
import './App.css';
import DogsListContainer from './component/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImages from './component/DogBreedImages';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DogsListContainer} />
        <Route path='/dog-breeds/:breed' component={DogBreedImages} />
      </div>
    );
  }
}

export default App;
