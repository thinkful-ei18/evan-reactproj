import React, { Component } from 'react';
import Header from './Components/Header';
import './Components/App.css';
import LanguageSelector from './Components/LanguageSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector />
      </div>
    );
  }
}

export default App;
