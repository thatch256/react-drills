import React, { Component } from "react";
import "./App.css";
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image passedImage={'https://via.placeholder.com/1000'}/>
      </div>
    );
  }
}

export default App;
