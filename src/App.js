import React from 'react';
import './App.css';
import DogsListContainer from './component/DogsListContainer'
import { Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DogsListContainer} />
      </div>
    );
  }
}

export default App;
