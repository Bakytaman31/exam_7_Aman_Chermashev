import React, { Component } from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";

class App extends Component {

    addGood() {
        console.log('You add')
    }

  render() {
    return (
      <div className="App">
        <Menu
            addGood={this.addGood}
        />
      </div>
    );
  }
}

export default App;
