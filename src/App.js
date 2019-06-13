import React from 'react';
import './App.css';
import DogsList from './component/DogsList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        < DogsList />
      </div>
    );
  }
}

export default App;
