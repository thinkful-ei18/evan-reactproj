import React, { Component } from 'react';
import Header from './Components/Header';
import './Components/App.css';
import LanguageSelector from './Components/LanguageSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      sourceLang:'en',
      targetLang:'de'
    }
  }

  alterSourceLang (e) {
    this.setState({
      sourceLang:e
    })
  }

  alterTargetLang (e) {
    this.setState({
      targetLang:e
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector alterTargetLang={(e) => this.alterTargetLang(e)} alterSourceLang={(e) => this.alterSourceLang(e)} {...this.state} />
      </div>
    );
  }
}

export default App;
