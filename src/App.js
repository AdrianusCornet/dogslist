import React from 'react';
import './App.css';
import DogsListContener from './component/DogsListContener';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        < DogsListContener />
      </div>
    );
  }
}

export default App;
